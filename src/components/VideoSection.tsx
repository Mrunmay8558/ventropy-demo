import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Ensure sound is enabled
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Video playback failed:", error);
        });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gray-900 w-full h-[100vh]" // Full height of viewport
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        playsInline
        muted
      >
        <source
          src="https://res.cloudinary.com/dojc5d0dj/video/upload/v1733996225/aditya_birla_fzpq7e.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handlePlayVideo}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 transition"
          >
            Play with Sound
          </button>
        </div>
      )}
    </motion.div>
  );
}
