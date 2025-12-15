"use client";
import React, { memo, useEffect, useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const roles = [
  "Full Stack Developer",
  "Mobile App Developer",
  "Android App Developer",
  "DevOps Engineer",
];
import { TextAnimate } from "../ui/text-animate";

function Role() {
  const [role, setRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRole(roles[Math.floor(Math.random() * roles.length)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 dark:bg-orange-500/50 bg-orange-500 text-white  dark:shadow-[5px_5px_0px_rgba(255,255,255,0.7)] shadow-[5px_5px_0px_rgba(0,0,0,0.7)] transition-width duration-300 w-[fit-content]" >
      <RoleView role={role} />
    </div>
  );
}

const RoleView = memo(({ role }: { role: string }) => {
  return (
    <div>
      <TextAnimate duration={0.2}>{role}</TextAnimate>
    </div>
  );
});

export default Role;
