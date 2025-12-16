"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowDown } from "lucide-react";

export default function ImageExpand() {
  const [open, setOpen] = useState(false);
  const [imageDone, setImageDone] = useState(false);

  const close = () => {
    setImageDone(false);
    setTimeout(() => setOpen(false), 350);
  };

  return (
    <>
      {/* Thumbnail */}
      <motion.div
        layoutId="profile-image"
        onClick={() => setOpen(true)}
        className="relative w-20 h-20 rounded-full overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="/anant.png"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            {/* Content */}
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
              {/* Expanded Image */}
              <motion.div
                layoutId="profile-image"
                className="relative w-[90vw] max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl pointer-events-auto cursor-pointer"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onLayoutAnimationComplete={() => {
                  if (!imageDone) setImageDone(true);
                }}
                onClick={close}
              >
                <Image
                  src="/anant.jpeg"
                  alt="Profile"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* CTA */}
              <AnimatePresence>
                {imageDone && (
                  <motion.div
                    className="mt-6 pointer-events-auto"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.35 }}
                  >
                    <motion.button
                      layout
                      whileTap={{ scale: 0.95 }}

                      exit={{ width: 48, opacity: 0 }}
                      transition={{ duration: .35 }}
                      className="
                      w-[fit-content]
                        h-12
                        flex items-center justify-between
                        px-4
                        rounded-full
                        border border-white/60
                        text-white
                        overflow-hidden
                        bg-white/5 backdrop-blur
                      "
                      onClick={() => window.open("/anant_kumar_resume.pdf", "_blank", "noopener,noreferrer")}
                    >
                      {/* Text draws in */}
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 150 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ delay: 0.15, duration: .35 }}
                        className="whitespace-nowrap text-sm font-medium"
                      >
                        Download Resume
                      </motion.span>
                      <motion.div
                        initial={{ opacity: 1, width: 100 }}
                        transition={{ delay: 0.15, duration: .35 }}
                        className="bg-gradient-to-r from-transparent to-neutral-500 absolute right-0 top-0 bottom-0"
                      ></motion.div>

                      {/* Icon pinned at end */}
                      <span className="shrink-0 ml-2 backdrop-blur-sm rounded-full p-1 border-dashed border-white/60">
                        <ArrowDown size={18} />
                      </span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
