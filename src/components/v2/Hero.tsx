import { MailIcon, VerifiedIcon } from "lucide-react";
import React from "react";
import Role from "./Role";
import About from "./About";
import GithubCalendar from "./GithubCalendar";
import SharedAvatar from "./SharedAvatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function Hero() {
  return (
    <div className="max-w-4xl mx-auto w-full m-4 md:m-10">
      <div className="flex items-center w-full px-2 md:px-4">
        <div className="flex items-center gap-2 w-full">
          <div className="transition-all duration-300 flex flex-col gap-2 w-full">
            <div className="flex items-start md:items-center justify-between w-full gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-black dark:text-neutral-50">
                      Anant Kumar <br />
                    </p>
                  </div>
                  <VerifiedIcon className="text-emerald-400 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                </div>
                <div className="flex items-center gap-2 flex-row mt-1">
                  <span className="text-xs md:text-sm text-gray-500">
                    Patna Bihar, India
                  </span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-pointer"><MailIcon className="w-4 h-4" /></TooltipTrigger>
                      <TooltipContent>
                        <p>anantkrplay@gmail.com</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="flex-shrink-0">
                <SharedAvatar />
              </div>
            </div>

            <Role />
            <section id="about">
              <About />
              <GithubCalendar />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
