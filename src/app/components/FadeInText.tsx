'use client';

import { motion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
};

export default function AnimatedText({ text }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl font-bold"
    >
      {text}
    </motion.div>
  );
}
