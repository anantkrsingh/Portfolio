import NewNavbar from "@/components/v2/NewNavbar";
import Hero from "@/components/v2/Hero";
import React from "react";
import Experience from "@/components/v2/Experience";
import Stacks from "@/components/v2/Stacks";
import Projects from "@/components/v2/Projects";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <NewNavbar />
      <Hero />
      <Experience />
      <Stacks />
      <Projects />
    </div>
  );
}

export default page;
