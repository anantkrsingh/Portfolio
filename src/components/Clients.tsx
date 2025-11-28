"use client";
import React from "react";
import { motion } from "framer-motion";
import { stacks, companies } from "@/data";

const Clients = () => {
  return (
    <section className="section-padding relative" id="stacks">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-radial-gradient opacity-50" />
      
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
            Tech Stack & <span className="gradient-text">Tools</span>
          </h2>
          <p className="subheading">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20"
        >
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group glass-card-hover p-6 flex flex-col items-center justify-center gap-3 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={stack.icon}
                  alt={stack.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors text-center">
                {stack.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm uppercase tracking-widest text-white/40 mb-8">
            Companies I've worked with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.1 }}
              className="group relative"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden glass-card p-2 transition-all duration-300 group-hover:border-white/20">
                <img
                  src={company.nameImg}
                  alt={company.name}
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="mt-3 text-xs text-white/40 text-center group-hover:text-white/60 transition-colors">
                {company.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
