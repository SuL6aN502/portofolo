"use client";

import { useEffect, useState } from "react";

interface TypeWriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export default function TypeWriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  delay = 1600,
  className,
}: TypeWriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const word = words[wordIndex % words.length];

    // Finished typing the full word -> pause, then start deleting.
    if (!reverse && subIndex === word.length) {
      const timeout = setTimeout(() => setReverse(true), delay);
      return () => clearTimeout(timeout);
    }

    // Finished deleting -> move to the next word.
    if (reverse && subIndex === 0) {
      setReverse(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
      reverse ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, wordIndex, words, typeSpeed, deleteSpeed, delay]);

  const currentWord =
    words[wordIndex % words.length]?.substring(0, subIndex) ?? "";

  return (
    <span className={className}>
      {currentWord}
      <span className="animate-pulse text-blue-500 dark:text-cyan-400">|</span>
    </span>
  );
}
