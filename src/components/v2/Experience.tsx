import { ArrowDownRight } from "lucide-react";
import React from "react";

function Experience() {
  return (
    <section id="experience">
      <div className="flex flex-col w-full max-w-4xl gap-2 mx-auto px-4 md:px-4">
        <div className="flex items-center justify-between w-full gap-2 md:gap-4">
          <span className="whitespace-nowrap shrink-0 text-orange-700 font-bold text-lg md:text-xl dark:text-orange-500">
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
    <div className="flex cursor-pointer flex-col justify-between w-full transition-all duration-300 gap-3 md:gap-4 group overflow-hidden">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-between">
        <div className="flex flex-row flex-1 gap-2 md:gap-4 transition-all duration-300">
          <span className="dark:text-white/25 text-black/50 pt-1 text-sm md:text-base">
            {sNo}.
          </span>
          <div className="flex flex-col gap-1 md:gap-2 flex-1 min-w-0">
            <span className="font-bold text-lg md:text-xl break-words">
              {title}
            </span>
            <span className="text-xs md:text-sm font-normal dark:text-white/50 text-black/80 leading-relaxed">
              {role}
            </span>{" "}
            <span
              className="text-xs md:text-sm
    flex flex-row gap-2 items-start flex-wrap
    font-normal
    dark:text-white/50 text-black/80
    leading-relaxed
    max-h-none
    opacity-100
    translate-y-0
    md:overflow-hidden
    md:max-h-0
    md:opacity-0
    md:translate-y-1
    transition-all
    duration-300
    md:group-hover:max-h-40
    md:group-hover:opacity-100
    md:group-hover:translate-y-0
    md:group-hover:dark:text-white/70 md:group-hover:text-black/70"
            >
              {description}
            </span>
          </div>
        </div>

        <span
          className="text-xs md:text-sm whitespace-nowrap md:whitespace-nowrap
 font-normal dark:text-white/50 text-black/80 leading-relaxed shrink-0 self-start md:self-auto"
        >
          {duration}
        </span>
      </div>
    </div>
  );
};

export default Experience;
