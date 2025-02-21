"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { saveQuizAttempt } from "@/lib/indexedDB";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function Quiz({ params }: { params: Promise<{ quizId: string }> }) {
  const unwrappedParams = use(params); // Unwrap the params Promise
  const quizId = unwrappedParams.quizId; // Now safely access quizId

  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [userInput, setUserInput] = useState<string>("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/quiz")
      .then((res) => res.json())
      .then((data) => {
        const foundQuestion = data.find((q: Question) => q.id === Number(quizId));
        setQuestion(foundQuestion || null);
      });

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizId]);

  const handleTimeout = () => {
    setFeedback("Time's up! ⏳");
    saveQuizAttempt(0);
    setTimeout(() => router.push("/results"), 2000);
  };

  const handleAnswer = (option: string) => {
    setSelectedOption(option);
    const isCorrect = option === question?.correctAnswer;
    setFeedback(isCorrect ? "Correct! 🎉" : "Wrong ❌");
  
    // Save full quiz data
    saveQuizAttempt(question?.question || "", question?.correctAnswer || "", option, isCorrect ? 1 : 0);
  
    setTimeout(() => router.push("/results"), 2000);
  };

  const handleIntegerAnswer = () => {
    const isCorrect = userInput.trim() === question?.correctAnswer;
    setFeedback(isCorrect ? "Correct! 🎉" : "Wrong ❌");
  
    // Save full quiz data
    saveQuizAttempt(question?.question || "", question?.correctAnswer || "", userInput, isCorrect ? 1 : 0);
  
    setTimeout(() => router.push("/results"), 2000);
  };

  if (!question) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold">{question.question}</h2>
      <p className="text-red-500 mt-2">Time Left: {timeLeft} sec</p>

      {question.options.length > 0 ? (
        <div className="mt-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`block px-4 py-2 mt-2 w-full bg-blue-500 text-white rounded ${
                selectedOption === option ? "opacity-50" : ""
              }`}
              disabled={!!selectedOption}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter your answer"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border px-4 py-2 w-full rounded"
          />
          <button
            onClick={handleIntegerAnswer}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            disabled={userInput.trim() === ""}
          >
            Submit Answer
          </button>
        </div>
      )}

      {feedback && <p className="mt-4 font-bold">{feedback}</p>}
    </div>
  );
}
