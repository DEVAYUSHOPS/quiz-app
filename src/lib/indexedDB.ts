import { openDB } from "idb";

const DB_NAME = "QuizDB";
const STORE_NAME = "quizHistory";
const DB_VERSION = 1;

// Initialize IndexedDB
export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    },
  });
};

// Save a quiz attempt with full details
export const saveQuizAttempt = async (question: string, correctAnswer: string, userAnswer: string, score: number) => {
  const db = await initDB();
  await db.add(STORE_NAME, {
    question,
    correctAnswer,
    userAnswer,
    score,
    date: new Date().toISOString(),
  });
};

// Get all quiz history
export const getQuizHistory = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

// Clear history (optional function)
export const clearQuizHistory = async () => {
  const db = await initDB();
  await db.clear(STORE_NAME);
};
