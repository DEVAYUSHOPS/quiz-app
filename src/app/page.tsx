"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("/api/quiz")
      .then((res) => res.json())
      .then((data) => setQuizzes(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Interactive Quiz Platform</h1>
      {quizzes.map((quiz, index) => (
        <Link key={index} href={`/quiz/${quiz.id}`}>
          <div className="bg-white shadow-md p-4 m-2 rounded-lg cursor-pointer hover:bg-gray-200">
            {quiz.id}. {quiz.question}
          </div>
        </Link>
      ))}
    </div>
  );
}
