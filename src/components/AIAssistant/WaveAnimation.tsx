import React from 'react';
import { motion } from 'framer-motion';
import type { WaveAnimationProps } from './types';

export function WaveAnimation({ color = 'bg-blue-500', count = 4 }: WaveAnimationProps) {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={`w-1 h-8 ${color} rounded-full`}
          animate={{
            height: ["2rem", "1rem", "2rem"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}