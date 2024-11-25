import React from "react";
import { InfiniteMovingCards } from "./ui/moving-cards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <section className="" id="projects">
      <h1 className="heading">
        Sharing experience of{" "}
        <span className="text-purple">different projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
