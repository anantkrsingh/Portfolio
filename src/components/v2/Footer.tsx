import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
function Footer() {
  return (
    <footer className="w-full ">
      <div className="w-full my-4 pt-10 justify-center items-center flex flex-col gap-2 md:gap-4 max-w-4xl mx-auto mt-4 border-t border-dashed border-black dark:border-white/10">
        Made By Anant Kumar
        <Link href="https://github.com/anantkrsingh/portfolio" target="_blank">
          <div className="flex items-center gap-2">
            <FaGithub className="w-4 h-4" />
            <span className="text-sm font-medium underline">Source code</span>
          </div>
        </Link>
        <div className="flex items-center flex-row gap-2">
          <span> Hosted on </span>
          <Image src="/vercel.svg" alt="Vercel" width={18} height={18} />{" "}
          <span>Vercel</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
