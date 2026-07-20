"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { QuizOverlay } from "./QuizOverlay";

type QuizCtx = { open: () => void };

const Ctx = createContext<QuizCtx | null>(null);

export function useQuiz(): QuizCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useQuiz must be used within <QuizProvider>");
  return c;
}

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {isOpen && <QuizOverlay onClose={close} />}
    </Ctx.Provider>
  );
}
