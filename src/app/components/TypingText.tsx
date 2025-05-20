'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

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
  const currentIndexRef = useRef(0);

  // Clear intervals and timeouts
  const clearTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Typing function
  const type = useCallback(() => {
    clearTimers();
    intervalRef.current = setInterval(() => {
      if (currentIndexRef.current < text.length) {
        setDisplayedText(text.slice(0, currentIndexRef.current + 1));
        currentIndexRef.current += 1;
      } else {
        clearTimers();
        timeoutRef.current = setTimeout(() => {
          erase();
        }, pause);
      }
    }, speed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, pause, clearTimers]);

  // Erasing function
  const erase = useCallback(() => {
    clearTimers();
    intervalRef.current = setInterval(() => {
      if (currentIndexRef.current > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        currentIndexRef.current -= 1;
      } else {
        clearTimers();
        timeoutRef.current = setTimeout(() => {
          type();
        }, erasePause);
      }
    }, eraseSpeed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eraseSpeed, erasePause, type, clearTimers]);

  useEffect(() => {
    setDisplayedText('');
    currentIndexRef.current = 0;
    type();

    return () => {
      clearTimers();
    };
  }, [text, speed, pause, eraseSpeed, erasePause, type, clearTimers]);

  return <div className="text-xl font-serif">{displayedText}|</div>;
}