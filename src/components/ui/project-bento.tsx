"use client";
import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export const ProjectBentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ProjectBentoItem = ({
  className,
  id,
  title,
  description,
  logo,
  iconLists,
  link,
  accentColor = "#10b981",
}: {
  className?: string;
  id: number;
  title: string;
  description: string;
  logo: string;
  iconLists: string[];
  link: string;
  accentColor?: string;
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl min-h-[340px] lg:min-h-[380px]",
        "bg-white/[0.02] backdrop-blur-xl border border-white/[0.05]",
        "hover:border-white/[0.15] hover:bg-white/[0.04]",
        "transition-all duration-500 cursor-pointer",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor}10 0%, transparent 60%)`,
        }}
      />

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative h-full flex flex-col p-6 lg:p-8">
        {/* Logo Section */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div
            className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{
              background: `linear-gradient(145deg, ${accentColor}15, transparent)`,
            }}
          >
            <img
              src={logo}
              alt={title}
              className="w-12 h-12 lg:w-14 lg:h-14 object-contain transition-all duration-500 group-hover:brightness-125"
            />
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
              style={{ background: accentColor }}
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-4">
          {/* Title */}
          <h3 className="font-bold text-lg lg:text-xl text-white/90 group-hover:text-white transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Bottom row: Tech stack & Link */}
          <div className="flex items-center justify-between pt-2">
            {/* Tech stack icons */}
            <div className="flex items-center">
              {iconLists.slice(0, 4).map((icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/20"
                  style={{
                    transform: `translateX(-${index * 8}px)`,
                    zIndex: iconLists.length - index,
                  }}
                >
                  <img src={icon} alt="tech" className="w-4 h-4" />
                </div>
              ))}
              {iconLists.length > 4 && (
                <div
                  className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-xs text-white/50"
                  style={{ transform: `translateX(-${4 * 8}px)` }}
                >
                  +{iconLists.length - 4}
                </div>
              )}
            </div>

            {/* Visit link indicator */}
            <div 
              className="flex items-center gap-2 text-sm transition-all duration-300"
              style={{ color: `${accentColor}99` }}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs uppercase tracking-wider">
                View
              </span>
              <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner glow */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ background: accentColor }}
      />
    </motion.a>
  );
};
