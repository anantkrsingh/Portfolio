import { ArrowDownRight } from "lucide-react";
import React from "react";

function Experience() {
  return (
    <section id="experience">
      <div className="flex flex-col w-full max-w-4xl gap-2 mx-auto px-4">
        <div className="flex items-center justify-between w-full gap-4">
          <span className="whitespace-nowrap shrink-0 text-orange-700 font-bold text-xl dark:text-orange-500">
            {" "}
            ~ Experiences ~
          </span>{" "}
          <div className="flex-grow h-px border-b border-dashed border-black dark:border-white"></div>
        </div>

        <ExperienceCard
          title="Drezily Inc."
          role="Mobile App Developer Intern"
          sNo={1}
          description="Developed and maintained mobile apps using React Native and TypeScript."
          duration="Sept. 2025 - Dec. 2025"
        />
        <ExperienceCard
          title="Aroundyou Entertainment Pvt. Ltd."
          role="Full Stack Developer Intern"
          sNo={2}
          description="Build Hopzy - A Ticketing Platform and releasted it on play store and app store. Maintained the Next.js backend and the React Native frontend."
          duration="Apr. 2025 - Sept. 2025"
        />
        <ExperienceCard
          title="Rhizobee Technologies"
          role="Full Stack Developer"
          sNo={3}
          description="Built Appliviu from scratch using React Native and TypeScript to Production ready and Backend using Node.js and MongoDB."
          duration="Nov. 2023 - Mar. 2024"
        />
        <ExperienceCard
          title="ETM Bikes"
          role="Android App Developer Intern"
          sNo={4}
          description="Developed ETM Connect, an Android app in Java to track rider performance, along with a React.js web dashboard for monitoring, integrating Node.js, Firebase, and Razorpay payment gateway."
          duration="May. 2023 - Nov. 2023"
        />
        <ExperienceCard
          title="SNA Sistec"
          role="Android app Developer Intern"
          sNo={5}
          description="Developed a Java-based Android app to discover IoT devices on the same Wi-Fi network and provide an interface for real-time device control."
          duration="Nov 2022 - Han 2023"
        />
      </div>
    </section>
  );
}

const ExperienceCard = ({
  sNo,
  title,
  role,
  description,
  duration,
}: {
  sNo: number;
  title: string;
  role: string;
  description: string;

  duration: string;
}) => {
  return (
    <div className="flex cursor-pointer flex-col justify-between w-full transition-all duration-300 gap-4 group overflow-hidden">
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row flex-1 gap-4 transition-all duration-300">
          <span className="dark:text-white/25 text-black/50 pt-1">{sNo}.</span>
          <div className="flex flex-col gap-2">
            <span className="whitespace-nowrap shrink-0  font-bold text-xl ">
              {title} <br />
            </span>
            <span className="text-sm font-normal dark:text-white/50 text-black/80 leading-relaxed line-clamp-3 overflow-hidden transition-all duration-300 ">
              {role}
            </span>{" "}
            <span
              className="text-sm
    flex flex-row gap-2 items-start flex-wrap
    font-normal
    dark:text-white/50 text-black/80
    leading-relaxed
    overflow-hidden
    max-h-0
    opacity-0
    translate-y-1
    transition-all
    duration-300
    group-hover:max-h-40
    group-hover:opacity-100
    group-hover:translate-y-0
    group-hover:dark:text-white/70 group-hover:text-black/70 "
            >
              {description}
            </span>
          </div>
        </div>

        <span
          className="text-sm   whitespace-nowrap
 font-normal text-white/50 leading-relaxed line-clamp-3 overflow-hidden transition-all duration-300 "
        >
          {duration}
        </span>
      </div>
    </div>
  );
};

export default Experience;
