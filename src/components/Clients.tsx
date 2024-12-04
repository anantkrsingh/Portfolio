import React from "react";
import { InfiniteMovingCards } from "./ui/moving-cards";
import { companies, stacks } from "@/data";

const Clients = () => {
  return (
    <section className="" id="stacks">
      <h1 className="heading">
        Stacks & Frameworks <span className="text-purple">I use</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10 max-lg:mt-10">
        <InfiniteMovingCards
          items={stacks}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-16 max:lg mt-10">
          {companies.map(({  name, nameImg, id }) => {
            return (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2 ">
                <img src={nameImg} alt={name} className="md:w-24 w-20 " />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
