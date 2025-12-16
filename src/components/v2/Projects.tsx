import { projects } from "@/data";
import { GithubIcon, GlobeIcon } from "lucide-react";
import React from "react";

function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="w-full flex flex-col gap-4 max-w-4xl mx-auto mt-4">
        <div className="flex flex-col w-full max-w-4xl gap-2 mx-auto px-4">
          <div className="flex items-center justify-between w-full gap-4">
            <span className="whitespace-nowrap shrink-0 text-orange-700 font-bold text-xl dark:text-orange-500">
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
}: {
  sNo: number;
  title: string;
  role: string;
  description: string;
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

        <div
          className="text-sm gap-1 flex flex-row items-start justify-center  whitespace-nowrap
 font-normal text-white/50 leading-relaxed line-clamp-3 overflow-hidden transition-all duration-300 "
        >
          <button
            className=" p-2 
          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-neutral-200 
          text-black
          rounded-lg"
          >
            <GithubIcon className="w-4 h-4" />
          </button>
          <button
            className=" p-2 
          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-neutral-200 
          text-black
          rounded-lg"
          >
            <GlobeIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
