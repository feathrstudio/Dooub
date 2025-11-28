import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "emotion",
  "stories",
  "people",
  "feelings",
  "experience",
  "ideas",
  "moments",
  "creativity",
  "meaning",
  "life"
];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-[#050505] to-[#050505] z-0" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      
      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#01C853] font-medium tracking-widest text-xs sm:text-sm md:text-base uppercase mb-3 md:mb-5"
        >
          We build the future
        </motion.p>
        
        <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.03] md:leading-[1.02] text-white mb-2 md:mb-3">
          Tech that<br />
          understands
        </h1>
        
        {/* Dynamic word */}
        <div className="mt-1 mb-2 flex justify-center min-h-[3.5rem] sm:min-h-[4.5rem] md:min-h-[5.5rem] lg:min-h-[6.5rem]">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="inline-block leading-[1.08] text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#01C853] to-emerald-200"
            >
              {words[index]}.
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 md:mt-10 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-[1.4] md:leading-[1.6]"
        >
            From games to media, and now to AI. <br className="hidden md:block"/>
            Dooub connects technology with human experience.
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#01C853] to-transparent"></div>
      </div>
    </section>
  );
};