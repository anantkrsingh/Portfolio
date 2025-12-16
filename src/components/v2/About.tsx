import React from "react";

function About() {
  return (
    <div className="mt-6 md:mt-10 gap-3 md:gap-2 flex flex-col border-b border-dashed border-black dark:border-white pb-6 md:pb-10 px-4 md:px-0">
      <div className="">
        <span className="text-sm md:text-base leading-relaxed">
          <BoldText text="Full-Stack Developer" /> with{" "}
          <BoldText text="3 years" /> of experience in Mobile and Web
          applications, known for debugging and optimizing code.
        </span>
      </div>
      <span className="text-sm md:text-base leading-relaxed">
        Proficient in <BoldText text="Node.js" />, <BoldText text="Next.js" />,{" "}
        <BoldText text="TypeScript" />, and <BoldText text="React Native" />.
        Building high-quality applications.
      </span>
      <span className="text-sm md:text-base leading-relaxed">
        I test apps by using wires so users can share without wire. Overall I convert ideas into applications.
      </span>
      <span className="mt-4 text-sm md:text-base leading-relaxed">
        <BoldText text="tldr;" /> I enjoy coding and problem solving, especially
        digging into tricky issues. Once I start debugging, I don&apos;t stop
        until I find the root cause and smash the bug completely.
      </span>
    </div>
  );
}

const BoldText = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex -rotate-2 hover:rotate-0 w-fit light:bg-black dark:bg-white bg-black text-white dark:text-black px-1 py-0.5 dark:shadow-[2px_2px_0px_rgba(255,255,255,0.7)] shadow-[2px_2px_0px_rgba(0,0,0,0.7)] transition-all duration-300">
      <span className="font-semibold text-xs md:text-sm">{text}</span>
    </span>
  );
};

export default About;
