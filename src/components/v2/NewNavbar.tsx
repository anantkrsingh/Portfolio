"use client";
import React, { useRef } from "react";
import { useTheme } from "next-themes";
import { Button } from "../moving-borders";
import { Link, MoonIcon, SunIcon } from "lucide-react";
import { navItems } from "@/data";

function NewNavbar() {
  const currentTheme = useTheme();
  const isDark = currentTheme.theme === "dark";
  const toggleTheme = () => {
    currentTheme.setTheme(isDark ? "light" : "dark");
  };
  const activeSection = useRef<string>(navItems[0].link);
  return (
    <nav className="bg-transparent backdrop-blur-xl  w-full z-50 border-b border-dashed dark:border-white/10 border-black/10">
      <div className={`flex items-center justify-between`}>
        <span className="text-2xl font-bold dark:text-white p-10 text-black cursor-pointer">
          A
        </span>

        <div className="flex items-center gap-2  h-[-webkit-fill-available] me-4">
          <div className="gap-4 flex flex-row h-full">
            <NavbarLink isActive={activeSection.current === navItems[0].link}>
              <p>About</p>
            </NavbarLink>
            <NavbarLink isActive={activeSection.current === navItems[1].link}>
              <p>Experience</p>
            </NavbarLink>
            <NavbarLink isActive={activeSection.current === navItems[2].link}>
              <p>Projects</p>
            </NavbarLink>
            <NavbarLink isActive={activeSection.current === navItems[3].link}>
              <p>Blogs</p>
            </NavbarLink>
          </div>
          {isDark && (
            <div
              className="cursor-pointer dark:text-white text-black"
              onClick={toggleTheme}
            >
              <SunIcon className="w-5 h-5" />
              <span className="sr-only">Toggle theme</span>
            </div>
          )}
          {!isDark && (
            <div
              className="cursor-pointer dark:text-white text-black"
              onClick={toggleTheme}
            >
              <MoonIcon className="w-5 h-5" />
              <span className="sr-only">Toggle theme</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

const NavbarLink = ({
  isActive,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`flex items-center h-full gap-2 cursor-pointer dark:text-white text-black p-4 ${
        isActive ? "bg-gray-700/20" : "bg-transparent"
      } `}
    >
      <p className="text-sm font-medium dark:text-white text-black">
        {children}
      </p>
    </div>
  );
};

export default NewNavbar;
