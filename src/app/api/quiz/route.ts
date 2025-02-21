import { NextResponse } from "next/server";

const quizQuestions = [
  // Multiple-Choice Questions
  {
    id: 1,
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    id: 2,
    question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: "Queue",
  },
  {
    id: 3,
    question: "Which of the following is primarily used for structuring web pages?",
    options: ["Python", "Java", "HTML", "C++"],
    correctAnswer: "HTML",
  },
  {
    id: 4,
    question: "Which chemical symbol stands for Gold?",
    options: ["Au", "Gd", "Ag", "Pt"],
    correctAnswer: "Au",
  },
  {
    id: 5,
    question: "Which of these processes is not typically involved in refining petroleum?",
    options: ["Fractional distillation", "Cracking", "Polymerization", "Filtration"],
    correctAnswer: "Filtration",
  },

  // Integer-Type Questions (Treated as single-input answers)
  {
    id: 6,
    question: "What is the value of 12 + 28?",
    options: [], // No choices for integer-type questions
    correctAnswer: "40",
  },
  {
    id: 7,
    question: "How many states are there in the United States?",
    options: [],
    correctAnswer: "50",
  },
  {
    id: 8,
    question: "In which year was the Declaration of Independence signed?",
    options: [],
    correctAnswer: "1776",
  },
  {
    id: 9,
    question: "What is the value of pi rounded to the nearest integer?",
    options: [],
    correctAnswer: "3",
  },
  {
    id: 10,
    question: "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
    options: [],
    correctAnswer: "120",
  },
];

export async function GET() {
  return NextResponse.json(quizQuestions);
}
