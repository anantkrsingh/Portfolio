import { VerifiedIcon } from "lucide-react";
import React from "react";
import Role from "./Role";
import About from "./About";
import GithubCalendar from "./GithubCalendar";
import SharedAvatar from "./SharedAvatar";
function Hero() {
  return (
    <div className="max-w-4xl mx-auto w-full m-10">
      <div className="flex items-center w-full px-4">
        <div className="flex items-center gap-2">
          <div className="transition-all duration-300 flex flex-col gap-2">
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-2xl font-bold text-black dark:text-neutral-50">
                      Anant Kumar <br />
                    </p>
                  </div>
                  <VerifiedIcon className="text-emerald-400" />
                </div>
                <span className="text-sm text-gray-500">
                  Patna Bihar, India
                </span>
              </div>
              <SharedAvatar />
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
