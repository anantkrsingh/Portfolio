import { projects } from "@/data";
import { DownloadIcon, GithubIcon, GlobeIcon, PlayIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaAppStore } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="w-full flex flex-col gap-2 md:gap-4 max-w-4xl mx-auto mt-4">
        <div className="flex flex-col w-full max-w-4xl gap-2 mx-auto px-4">
          <div className="flex items-center justify-between w-full gap-2 md:gap-4">
            <span className="whitespace-nowrap shrink-0 text-orange-700 font-bold text-lg md:text-xl dark:text-orange-500">
              ~ Featured Projects ~
            </span>{" "}
            <div className="flex-grow h-px border-b border-dashed border-black dark:border-white"></div>
          </div>
        </div>

        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            sNo={index + 1}
            title={project.title}
            role={project.des}
            description={project.des}
            playStore={project.playStore}
            appStore={project.appStore}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
const ProjectCard = ({
  sNo,
  title,
  role,
  description,
  playStore,
  appStore,
  github,
  link,
}: {
  sNo: number;
  title: string;
  role: string;
  description: string;
  playStore: string | undefined;
  appStore: string | undefined;
  github: string | null | undefined;
  link: string | undefined;
}) => {
  return (
    <div className="flex cursor-pointer flex-col justify-between w-full transition-all duration-300 gap-3 md:gap-4 group overflow-hidden px-4 md:px-0">
      <div className="flex flex-col gap-2 md:gap-2">
        {/* Title row with icons always on the right */}
        <div className="flex flex-row gap-2 md:gap-4 justify-between items-start">
          <div className="flex flex-row flex-1 gap-2 md:gap-4 transition-all duration-300 min-w-0">
            <span className="dark:text-white/25 text-black/50 pt-1 text-sm md:text-base shrink-0">{sNo}.</span>
            <span className="font-bold text-lg md:text-xl break-words flex-1 min-w-0">
              {title}
            </span>
          </div>

          <div
            className="gap-1 flex flex-row items-center justify-end shrink-0
 font-normal text-white/50 leading-relaxed transition-all duration-300 "
          >
          {playStore && (
            <Link
              href={playStore}
              target="_blank"
              className="p-2 
          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-neutral-200 cursor-pointer
          text-black
          rounded-lg hover:bg-neutral-300 transition-colors"
            >
              <IoLogoGooglePlaystore className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          )}
          {appStore && (
            <Link
              href={appStore}
              target="_blank"
              className="p-2 cursor-pointer
          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-neutral-200 
          text-black
          rounded-lg hover:bg-neutral-300 transition-colors"
            >
              <FaAppStore className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              className="p-2 cursor-pointer
          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-neutral-200 
          text-black
          rounded-lg hover:bg-neutral-300 transition-colors"
            >
              <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          )}
          {link && (
            <Link
              href={link}
              target="_blank"
              className="p-2 cursor-pointer
          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-neutral-200 
          text-black
          rounded-lg hover:bg-neutral-300 transition-colors"
            >
              <GlobeIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          )}
          </div>
        </div>

        {/* Description below title row */}
        <div className="flex flex-row gap-2 md:gap-4">
          <span className="dark:text-white/25 text-black/50 pt-1 text-sm md:text-base shrink-0 opacity-0">{sNo}.</span>
          <span className="text-xs md:text-sm font-normal dark:text-white/50 text-black/80 leading-relaxed line-clamp-3 overflow-hidden transition-all duration-300 flex-1">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
