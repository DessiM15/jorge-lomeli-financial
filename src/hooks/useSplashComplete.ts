"use client";

import { useEffect, useState } from "react";

export function useSplashComplete() {
  const [splashComplete, setSplashComplete] = useState(false);

  useEffect(() => {
    // Total splash duration: 1s fade-in + 1s hold + 0.8s slide-up = 2.8s
    const timer = setTimeout(() => {
      setSplashComplete(true);
      document.body.classList.remove("splash-active");
    }, 2800);

    document.body.classList.add("splash-active");

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("splash-active");
    };
  }, []);

  return splashComplete;
}
