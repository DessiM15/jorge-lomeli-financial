"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SideNavDots } from "@/components/layout/SideNavDots";
import { ClickToCallButton } from "@/components/layout/ClickToCallButton";
import { SplashScreen } from "@/components/sections/SplashScreen";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Contact } from "@/components/sections/Contact";
import { useSplashComplete } from "@/hooks/useSplashComplete";

export default function Home() {
  const splashComplete = useSplashComplete();

  return (
    <>
      <SplashScreen isComplete={splashComplete} />
      <Navbar />
      <SideNavDots />
      <ClickToCallButton />
      <main>
        <Hero splashComplete={splashComplete} />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
