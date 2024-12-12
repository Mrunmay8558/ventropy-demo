import React from "react";
import { motion } from "framer-motion";
import { VoiceWave } from "./VoiceWave";
import { AI_CONFIG } from "./constants";
import type { AIPersonaProps } from "./types";
import saraImage from "../assets/saraAi.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import wave from "../assets/voice-wave.json";

export function AIPersona({
  name = AI_CONFIG.name,
  role = AI_CONFIG.role,
  capabilities = AI_CONFIG.capabilities,
}: Partial<AIPersonaProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-6">
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

        <div className="mb-8">
          <p className="text-gray-700 mb-4 text-lg">
            I'm your personal financial assistant, ready to help you with:
          </p>
          <DotLottieReact data={wave} loop autoplay />
        </div>
      </div>
    </motion.div>
  );
}
