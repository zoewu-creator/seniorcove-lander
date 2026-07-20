"use client";

import { useQuiz } from "./quiz/QuizContext";

export function QuizButton({
  className = "btn",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useQuiz();
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}
