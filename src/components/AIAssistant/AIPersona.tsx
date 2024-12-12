import React from 'react';
import { motion } from 'framer-motion';
import { VoiceWave } from './VoiceWave';
import { AI_CONFIG } from './constants';
import type { AIPersonaProps } from './types';
import saraImage from '../assets/sara-ai.png';

export function AIPersona({ 
  name = AI_CONFIG.name, 
  role = AI_CONFIG.role, 
  capabilities = AI_CONFIG.capabilities 
}: Partial<AIPersonaProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative overflow-hidden"
    >
      <div className="absolute -right-20 -top-20 w-64 h-64 opacity-10">
        <img src={saraImage} alt="Sara AI" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
            <img src={saraImage} alt="Sara AI" className="w-full h-full object-cover" />
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
          <ul className="space-y-3">
            {capabilities.map((capability, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg"
              >
                <span className={`w-2 h-2 rounded-full ${
                  index === 0 ? 'bg-blue-500' : 
                  index === 1 ? 'bg-purple-500' : 
                  'bg-pink-500'
                }`}></span>
                <span className="text-gray-700">{capability}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
          <VoiceWave />
        </div>
      </div>
    </motion.div>
  );
}