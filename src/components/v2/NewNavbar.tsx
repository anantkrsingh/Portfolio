"use client";
import React, { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import { navItems } from "@/data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function NewNavbar() {
  const currentTheme = useTheme();
  const searchParams = useSearchParams();
  const isDark = currentTheme.theme === "dark";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleTheme = () => {
    currentTheme.setTheme(isDark ? "light" : "dark");
  };
  const [activeSection, setActiveSection] = useState<string>(navItems[0].link);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };



  return (
    <nav className="bg-transparent fixed backdrop-blur-xl h-[6rem] top-0 left-0 right-0 z-50 w-full border-b border-dashed dark:border-white/10 border-black/10 ">
      <div className={`flex items-center justify-between h-full`}>
        <span className="text-2xl font-bold dark:text-white px-4 md:px-10 text-black cursor-pointer">
          A
        </span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2 items-center h-[6rem] me-4">
          <div className="gap-4 flex flex-row h-full">
            <NavbarLink
              href={navItems[0].link}
              isActive={activeSection === navItems[0].link}
            >
              <p>About</p>
            </NavbarLink>
            <NavbarLink
              href={navItems[1].link}
              isActive={activeSection === navItems[1].link}
            >
              <p>Experience</p>
            </NavbarLink>
            <NavbarLink
              href={navItems[2].link}
              isActive={activeSection === navItems[2].link}
            >
              <p>Projects</p>
            </NavbarLink>
            <NavbarLink
              href={navItems[3].link}
              isActive={activeSection === navItems[3].link}
            >
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

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="flex md:hidden items-center gap-4 px-4">
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
          <button
            onClick={toggleMobileMenu}
            className="cursor-pointer dark:text-white text-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black backdrop-blur-xl border-b border-dashed dark:border-white/10 border-black/10 shadow-lg z-50">
          <div className="flex flex-col">
            <MobileNavbarLink
              href={navItems[0].link}
              isActive={activeSection.current === navItems[0].link}
              onClick={closeMobileMenu}
            >
              About
            </MobileNavbarLink>
            <MobileNavbarLink
              href={navItems[1].link}
              isActive={activeSection.current === navItems[1].link}
              onClick={closeMobileMenu}
            >
              Experience
            </MobileNavbarLink>
            <MobileNavbarLink
              href={navItems[2].link}
              isActive={activeSection.current === navItems[2].link}
              onClick={closeMobileMenu}
            >
              Projects
            </MobileNavbarLink>
            <MobileNavbarLink
              href={navItems[3].link}
              isActive={activeSection.current === navItems[3].link}
              onClick={closeMobileMenu}
            >
              Blogs
            </MobileNavbarLink>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavbarLink = ({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <div
        className={`flex items-center h-full gap-2 cursor-pointer dark:text-white text-black p-4 ${
          isActive ? "bg-gray-700/20" : "bg-transparent"
        } `}
      >
        <p className="text-sm font-medium dark:text-white text-black">
          {children}
        </p>
      </div>
    </Link>
  );
};

const MobileNavbarLink = ({
  href,
  isActive,
  children,
  onClick,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <div
        className={`flex items-center gap-2 cursor-pointer dark:text-white text-black px-6 py-4 border-b border-dashed dark:border-white/10 border-black/10 ${
          isActive ? "bg-gray-700/20" : "bg-transparent"
        } hover:bg-gray-700/10 transition-colors`}
      >
        <p className="text-sm font-medium dark:text-white text-black">
          {children}
        </p>
      </div>
    </Link>
  );
};

export default NewNavbar;
