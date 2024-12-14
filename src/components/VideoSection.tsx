import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function VideoSection({
  playAnimation,
}: {
  playAnimation: boolean;
}): JSX.Element {
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

  useEffect(() => {
    if (playAnimation) {
      handlePlayVideo();
    }
  }, [playAnimation]);

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
          src="https://res.cloudinary.com/dojc5d0dj/video/upload/v1734001587/new_jounrey_wjsomu.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
}
