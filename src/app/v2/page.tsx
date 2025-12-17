import NewNavbar from "@/components/v2/NewNavbar";
import Hero from "@/components/v2/Hero";
import React from "react";
import Experience from "@/components/v2/Experience";
import Stacks from "@/components/v2/Stacks";
import Projects from "@/components/v2/Projects";
import Footer from "@/components/v2/Footer";
function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <NewNavbar />
      <div>
        <div className="h-[6rem]"></div>
      </div>
      <Hero />
      <Experience />
      <Stacks />
      <Projects />
      <Footer />
    </div>
  );
}

export default page;
