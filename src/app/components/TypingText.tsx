'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  pause?: number; // Optional pause at end of typing
  eraseSpeed?: number; // Optional speed for erasing
  erasePause?: number; // Optional pause before erasing starts
}

export default function TypingText({
  text,
  className = '',
  // Match the total animation duration of PulsatingText (3.5s) to the typing/erasing cycle.
  // We'll split the 3.5s: half for typing, half for erasing (including pauses).
  speed,
  pause,
  eraseSpeed,
  erasePause,
}: TypingTextProps) {
  // Calculate dynamic speeds to match 3.5s total cycle
  const totalDuration = 3500; // ms, matches PulsatingText
  const chars = text.length;

  // We'll allocate 40% to typing, 10% pause, 40% erasing, 10% pause
  const typingDuration = totalDuration * 0.4;
  const typingSpeed = speed ?? (chars > 0 ? typingDuration / chars : 100);

  const typingPause = pause ?? totalDuration * 0.1;

  const erasingDuration = totalDuration * 0.4;
  const erasingSpeed = eraseSpeed ?? (chars > 0 ? erasingDuration / chars : 50);

  const erasingPause = erasePause ?? totalDuration * 0.1;

  const [displayed, setDisplayed] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function animateTyping() {
      // Typing
      for (let i = 1; i <= text.length; i++) {
        if (isCancelled) return;
        setDisplayed(i);
        await new Promise(res => {
          timeoutRef.current = setTimeout(res, typingSpeed);
        });
      }
      // Pause at end
      await new Promise(res => {
        timeoutRef.current = setTimeout(res, typingPause);
      });
      // Erasing
      for (let i = text.length - 1; i >= 0; i--) {
        if (isCancelled) return;
        setDisplayed(i);
        await new Promise(res => {
          timeoutRef.current = setTimeout(res, erasingSpeed);
        });
      }
      // Pause before typing again
      await new Promise(res => {
        timeoutRef.current = setTimeout(res, erasingPause);
      });
      if (!isCancelled) animateTyping();
    }

    setDisplayed(0);
    animateTyping();

    return () => {
      isCancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, typingSpeed, typingPause, erasingSpeed, erasingPause]);

  return (
    <div className={className}>
      <span style={{ whiteSpace: 'pre' }}>
        {text.slice(0, displayed)}
      </span>
      <motion.span
        className={className}
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        |
      </motion.span>
    </div>
  );
}