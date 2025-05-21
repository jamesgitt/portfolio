'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PulsatingTextProps {
  text: string;
  className?: string;
}

export default function PulsatingText({ text, className = '' }: PulsatingTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  // Get scroll progress for the element (0 = top of viewport, 1 = bottom)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animate as the element enters and leaves the viewport
  });

  // Map scroll progress to scale and opacity for a "pulse" effect
  // You can tweak the input/output ranges for different pulse timing
  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.85, 1.1, 1, 1.1, 0.85]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.7, 1, 1, 1, 0.7]
  );

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{
        scale,
        opacity,
        display: 'inline-block',
      }}
    >
      {text}
    </motion.span>
  );
}
