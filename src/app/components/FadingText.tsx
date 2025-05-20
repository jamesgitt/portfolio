'use client';

import { motion } from 'framer-motion';

type FadingTextProps = {
  text: string;
};

export default function FadingText({ text }: FadingTextProps) {
  return (
    <motion.div
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      className="text-4xl font-semibold text-center"
    >
      {text}
    </motion.div>
  );
}
