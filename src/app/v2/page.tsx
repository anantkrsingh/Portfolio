import NewNavbar from "@/components/v2/NewNavbar";
import Hero from "@/components/v2/Hero";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <NewNavbar />
      <Hero />
    </div>
  );
}

export default page;
