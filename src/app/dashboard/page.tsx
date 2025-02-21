"use client";
import { useEffect, useState } from "react";
import { initDB } from "@/lib/indexedDB";

interface QuizAttempt {
  id: number;
  question: string;
  correctAnswer: string;
  userAnswer: string;
  score: number;
  date: string;
}

export default function Dashboard() {
  const [history, setHistory] = useState<QuizAttempt[]>([]);
  const [totalScore, setTotalScore] = useState<number>(0);

  useEffect(() => {
    const fetchHistory = async () => {
      const db = await initDB();
      const allRecords = await db.getAll("quizHistory");
      console.log(allRecords);
      setHistory(allRecords);
      const scoreSum = allRecords.reduce((sum, attempt) => sum + attempt.score, 0);
      setTotalScore(scoreSum);
    };
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Quiz Attempt History</h1>

      {history.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
          <table className="w-full border-collapse border border-gray-300 text-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Question</th>
                <th className="border p-2">Correct Answer</th>
                <th className="border p-2">Your Answer</th>
                <th className="border p-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {history.map((attempt, index) => (
                <tr key={index} className="text-center border">
                  <td className="border p-2">{attempt.question}</td>
                  <td className="border p-2 text-green-600 font-bold">{attempt.correctAnswer}</td>
                  <td className={`border p-2 ${attempt.userAnswer === attempt.correctAnswer ? "text-green-600" : "text-red-600"}`}>
                    {attempt.userAnswer}
                  </td>
                  <td className="border p-2 font-bold">{attempt.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-3xl font-bold mt-6 text-center">Total Score: {totalScore}</div>
        </div>
      ) : (
        <p className="text-xl">No quiz attempts recorded.</p>
      )}
    </div>
  );
}
