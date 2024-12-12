import React from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  title: string;
  description: string;
}

export function VideoPlayer({ src, title, description }: VideoPlayerProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 aspect-video">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10" />
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/30">
        <div className="text-center text-white">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mb-2"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-200"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}