"use client";

import { useEffect, useState } from "react";

const words = ["Mom", "Dad", "your parent", "your family"];

export function RotatingWord() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setVisible(false);
      const t = setTimeout(() => {
        setI((p) => (p + 1) % words.length);
        setVisible(true);
      }, 280);
      return () => clearTimeout(t);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rotline">
      <span
        className="rot"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
        }}
      >
        {words[i]}
      </span>
      <span className="cursor" aria-hidden="true" />
    </div>
  );
}
