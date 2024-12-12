import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { AIPersona } from './components/AIAssistant/AIPersona';
import { VideoSection } from './components/VideoSection';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Your Financial Future Starts Here
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AIPersona />
            <VideoSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;