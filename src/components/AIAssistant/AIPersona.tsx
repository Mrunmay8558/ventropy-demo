import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { VoiceWave } from "./VoiceWave";
import { AI_CONFIG } from "./constants";
import type { AIPersonaProps } from "./types";
import saraImage from "../assets/saraAi.jpg";
import ondcLogo from "../assets/ondcLogo.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import wave from "../assets/voice-wave.json";

export function AIPersona({
  name = AI_CONFIG.name,
  role = AI_CONFIG.role,
  capabilities = AI_CONFIG.capabilities,
  setPlayAnimation,
}: Partial<AIPersonaProps>) {
  const [dotLottie, setDotLottie] = React.useState(null);

  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };

  const handlePlayAnimation = () => {
    if (dotLottie) {
      dotLottie.play();
      setPlayAnimation(true);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 w-3/4 backdrop-blur-sm rounded-2xl pt-8 shadow-xl relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
            <img
              src={saraImage}
              alt="Sara AI"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hello, I'm {name}
            </h3>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>

        <div className="mb-8 flex flex-col items-center justify-center">
          <p className="text-gray-700  text-lg text-center">
            I'm your personal insurance assistant.
          </p>
          <p className="text-gray-700 mb-4 text-base text-center">
            I'll help you with your insurance journey.
          </p>
          <DotLottieReact
            data={wave}
            loop
            style={{ width: "200px", height: "200px" }}
            dotLottieRefCallback={dotLottieRefCallback}
          />
          <button
            id="start-journey"
            onClick={() => handlePlayAnimation()}
            className="bg-blue-600 text-white  px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 transition"
          >
            Start your Journey
          </button>
          <motion.div className="flex flex-row items-center justify-center gap-1">
            <motion.h2 className="text-center text-lg mt-4 mb-2">
              Powered By
            </motion.h2>
            <img
              src={ondcLogo}
              alt="ondc-logo"
              style={{ height: "30px", marginTop: "10px" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
