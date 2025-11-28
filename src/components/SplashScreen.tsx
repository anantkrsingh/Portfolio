"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return prev;
        }
        if (prev >= 80) return prev + 3;
        if (prev >= 60) return prev + 2;
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center z-[1000]"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0a0f 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-[80px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Loader container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Progress ring */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 relative">
          <CircularProgressbar
            value={progress}
            styles={buildStyles({
              pathColor: `rgba(16, 185, 129, ${0.8 + progress / 500})`,
              trailColor: "rgba(255, 255, 255, 0.05)",
              pathTransitionDuration: 0.3,
            })}
          />
          
          {/* Logo in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src="/v.png"
              alt="logo"
              className="w-12 h-12 sm:w-14 sm:h-14"
              animate={{
                rotate: progress >= 50 ? 0 : 180,
                scale: progress >= 100 ? 1.1 : 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />
          </div>
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-white/40 text-sm tracking-widest uppercase">
            Loading
          </p>
          <motion.p
            className="text-emerald-400 text-2xl font-bold mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {progress}%
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
