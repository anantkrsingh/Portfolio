"use client";
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { socialMedia } from "@/data";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative section-padding" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-radial-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading mb-6">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="subheading mb-10">
            Have a project in mind? I'd love to hear about it.
            Let's create something amazing together.
          </p>

          {/* Contact Button */}
          <motion.a
            href="mailto:anantkrplay@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            <FaEnvelope className="w-5 h-5" />
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className="text-sm text-white/40 order-2 sm:order-1">
            © {new Date().getFullYear()} Anant Kumar. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 order-1 sm:order-2">
            <a
              href="https://github.com/anantkrsingh"
              target="_blank"
              rel="noreferrer"
              className="p-3 glass-card rounded-full text-white/50 hover:text-emerald-400 hover:border-emerald-400/30 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/anantkrsingh"
              target="_blank"
              rel="noreferrer"
              className="p-3 glass-card rounded-full text-white/50 hover:text-emerald-400 hover:border-emerald-400/30 transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 glass-card rounded-full text-white/50 hover:text-emerald-400 hover:border-emerald-400/30 transition-all duration-300 order-3"
          >
            <FaArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
