"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface TypeWriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export default function TypeWriter({
  words,
  typeSpeed = 60,
  deleteSpeed = 30,
  delay = 1800,
  className,
}: TypeWriterProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (words.length === 0) return;

    let wordIndex = 0;
    let cancelled = false;
    let pauseTimer: ReturnType<typeof setTimeout> | null = null;
    let animation: ReturnType<typeof animate> | null = null;

    const writeText = (value: string) => {
      if (textRef.current) textRef.current.textContent = value;
    };

    const typeWord = () => {
      if (cancelled) return;
      const word = words[wordIndex % words.length];
      const state = { chars: 0 };

      animation = animate(state, {
        chars: [0, word.length],
        duration: word.length * typeSpeed,
        ease: "linear",
        onUpdate: () => writeText(word.substring(0, Math.round(state.chars))),
        onComplete: () => {
          if (cancelled) return;
          pauseTimer = setTimeout(deleteWord, delay);
        },
      });
    };

    const deleteWord = () => {
      if (cancelled) return;
      const word = words[wordIndex % words.length];
      const state = { chars: word.length };

      animation = animate(state, {
        chars: [word.length, 0],
        duration: word.length * deleteSpeed,
        ease: "linear",
        onUpdate: () => writeText(word.substring(0, Math.round(state.chars))),
        onComplete: () => {
          if (cancelled) return;
          wordIndex = (wordIndex + 1) % words.length;
          typeWord();
        },
      });
    };

    typeWord();

    return () => {
      cancelled = true;
      animation?.cancel();
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, [words, typeSpeed, deleteSpeed, delay]);

  return (
    <span className={className}>
      <span ref={textRef} />
      <span className="animate-pulse text-blue-500 dark:text-cyan-400">|</span>
    </span>
  );
}
