"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface SplashScreenProps {
  isComplete: boolean;
}

export function SplashScreen({ isComplete }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative h-44 w-[36rem] md:h-56 md:w-[48rem]">
              <Image
                src="/images/lomeli-logo.png"
                alt="Lomeli Financial Group"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
