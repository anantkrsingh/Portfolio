"use client";
import { workExperience } from "@/data";
import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section className="section-padding relative" id="experience">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="subheading">
            My professional journey and the impact I've made
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workExperience.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full glass-card-hover p-6 sm:p-8 overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-purple-500/20 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={card.thumbnail}
                        alt={card.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white/90 group-hover:text-white transition-colors mb-2 line-clamp-2">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/50 group-hover:text-white/70 transition-colors leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
