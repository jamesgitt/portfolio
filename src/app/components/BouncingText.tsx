'use client';

import { motion } from 'framer-motion';

type BouncingTextProps = {
  text: string;
};

export default function BouncingText({ text }: BouncingTextProps) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      className="text-4xl font-bold text-center"
    >
      {text}
    </motion.div>
  );
}