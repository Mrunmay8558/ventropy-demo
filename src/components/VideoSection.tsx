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
      className="relative overflow-hidden w-full h-[100vh]" // Full height of viewport
    >
      <div className="absolute inset-0 " />
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-fill "
        loop
        playsInline
        muted
      >
        {/* insert link here */}
        <source
          src="https://res.cloudinary.com/dojc5d0dj/video/upload/v1734156321/new_video_qn1uh1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
}
