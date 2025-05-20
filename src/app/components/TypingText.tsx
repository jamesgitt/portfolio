'use client';

import { useState, useEffect, useRef } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  pause?: number; // Optional pause at end of typing
  eraseSpeed?: number; // Optional speed for erasing
  erasePause?: number; // Optional pause before erasing starts
}

export default function TypingText({
  text,
  speed = 100,
  pause = 1000,
  eraseSpeed = 50,
  erasePause = 500,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let currentIndex = 0;
    let isErasing = false;

    const type = () => {
      intervalRef.current = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex += 1;
        } else {
          clearInterval(intervalRef.current!);
          timeoutRef.current = setTimeout(() => {
            isErasing = true;
            erase();
          }, pause);
        }
      }, speed);
    };

    // Erase by character (removing one character at a time from the end)
    const erase = () => {
      intervalRef.current = setInterval(() => {
        if (currentIndex > 0) {
          setDisplayedText(prev => prev.slice(0, -1));
          currentIndex -= 1;
        } else {
          clearInterval(intervalRef.current!);
          timeoutRef.current = setTimeout(() => {
            isErasing = false;
            type();
          }, erasePause);
        }
      }, eraseSpeed);
    };

    setDisplayedText('');
    currentIndex = 0;
    isErasing = false;
    type();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, pause, eraseSpeed, erasePause]);

  return <div className="text-xl font-serif">{displayedText}|</div>;
}