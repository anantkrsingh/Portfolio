"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <section
      id=""
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-white/70">Available for work</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white/90 mb-2">Hey, I'm</span>
            {/* Name with brush stroke background */}
            <span className="relative inline-block">
              {/* Brush stroke SVG background */}
              <svg
                className="absolute -inset-x-4 sm:-inset-x-6 md:-inset-x-8 -inset-y-2 sm:-inset-y-3 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+4rem)] h-[calc(100%+1rem)] sm:h-[calc(100%+1.5rem)]"
                viewBox="0 0 400 80"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main brush stroke */}
                <path
                  d="M10 40 C30 15, 80 5, 150 12 C220 19, 280 8, 340 18 C380 25, 395 35, 390 45 C385 55, 350 65, 280 62 C210 59, 140 70, 80 65 C40 62, 15 55, 10 40 Z"
                  fill="white"
                  className="opacity-95"
                />
                {/* Paint texture strokes */}
                <path
                  d="M25 35 C45 28, 90 22, 160 25 C230 28, 300 20, 370 30"
                  stroke="rgba(240,240,240,0.6)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M30 50 C60 55, 130 48, 200 52 C270 56, 340 50, 375 55"
                  stroke="rgba(245,245,245,0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Drip effects */}
                <ellipse
                  cx="380"
                  cy="48"
                  rx="8"
                  ry="12"
                  fill="white"
                  className="opacity-80"
                />
                <ellipse
                  cx="20"
                  cy="42"
                  rx="6"
                  ry="10"
                  fill="white"
                  className="opacity-70"
                />
                {/* Splatter dots */}
                <circle
                  cx="395"
                  cy="35"
                  r="3"
                  fill="white"
                  className="opacity-60"
                />
                <circle
                  cx="5"
                  cy="38"
                  r="2"
                  fill="white"
                  className="opacity-50"
                />
                <circle
                  cx="388"
                  cy="60"
                  r="2"
                  fill="white"
                  className="opacity-40"
                />
              </svg>
              {/* Name text */}
              <span className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black font-black tracking-tight px-2">
                Anant Kumar
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <TextGenerateEffect
            words="A passionate full-stack developer crafting digital experiences"
            className="text-lg sm:text-xl md:text-2xl text-white/60 font-light"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build performant web & mobile applications with modern technologies.
          Specialized in React, Next.js, and creating seamless user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              View My Work
              <FaArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </a>
          <a
            href="mailto:anantkrplay@gmail.com"
            className="px-8 py-4 glass-card-hover text-white/80 font-medium rounded-full hover:text-white"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/anantkrsingh"
            target="_blank"
            rel="noreferrer"
            className="p-3 glass-card-hover rounded-full text-white/60 hover:text-emerald-400 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/anantkrsingh"
            target="_blank"
            rel="noreferrer"
            className="p-3 glass-card-hover rounded-full text-white/60 hover:text-emerald-400 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
