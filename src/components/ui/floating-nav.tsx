"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto z-[5000] max-w-fit",
          className
        )}
      >
        <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08] shadow-xl shadow-black/20">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium",
                "text-white/60 hover:text-white transition-colors duration-200",
                "hover:bg-white/[0.05]"
              )}
            >
              <span className="hidden sm:block">{navItem.name}</span>
              <span className="block sm:hidden">{navItem.icon || navItem.name.charAt(0)}</span>
            </Link>
          ))}
          
          {/* Accent indicator */}
          <div className="hidden sm:block w-2 h-2 rounded-full bg-emerald-500 ml-2 animate-pulse" />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
