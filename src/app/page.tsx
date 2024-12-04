"use client";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SplashScreen from "@/components/SplashScreen";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <main className="relative bg-black-100 dark:text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}{" "}
        <div className={`max-w-7xl w-full font-medium z-10`}>
          <FloatingNav navItems={navItems} />
          <Hero />
          <Projects />
          <Clients />
          <Experience />
          <Footer />
        </div>
      </main>
    </>
  );
}
