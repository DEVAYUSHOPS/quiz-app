"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Quiz {
  id: number;
  question: string;
}

export default function Home() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]); // Explicitly define type

  useEffect(() => {
    fetch("/api/quiz")
      .then((res) => res.json())
      .then((data: Quiz[]) => setQuizzes(data)) // Ensure TypeScript knows the type
      .catch((err) => console.error("Error fetching quizzes:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Interactive Quiz Platform</h1>
      {quizzes.map((quiz) => (
        <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
          <div className="bg-white shadow-md p-4 m-2 rounded-lg cursor-pointer hover:bg-gray-200">
            {quiz.id}. {quiz.question}
          </div>
        </Link>
      ))}
    </div>
  );
}
