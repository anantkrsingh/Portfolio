import Image from "next/image";
import React from "react";

const stacks = [
  {
    name: "React.js",
    type: "framework",
    icon: "/re.svg",
    bgColor: "bg-blue-800 dark:bg-blue-500",
    textColor: "text-white dark:text-white",
  },
  {
    name: "Next.js",
    type: "framework",
    icon: "/next.svg",
    bgColor: "bg-white dark:bg-white",
    textColor: "text-black dark:text-black",
  },
  {
    name: "Node.js",
    type: "runtime",
    icon: "/nodejs.svg",
    bgColor: "bg-white dark:bg-white",
    textColor: "text-black dark:text-black",
  },
  {
    name: "Tailwind",
    type: "framework",
    icon: "/tail.svg",
    bgColor: "bg-black dark:bg-white",
    textColor: "text-white dark:text-black",
  },
  {
    name: "React Native",
    type: "framework",
    icon: "/re.svg",
    bgColor: "bg-blue-800 dark:bg-blue-500",
    textColor: "text-white dark:text-white",
  },
  {
    name: "Expo",
    type: "framework",
    icon: "/expo.png",
    bgColor: "bg-white dark:bg-green-400",
    textColor: "text-black dark:text-black",
  },
  {
    name: "Express.js",
    type: "framework",
    icon: "/express.png",
    bgColor: "bg-red-700 dark:bg-red-500",
    textColor: "text-white dark:text-white",
  },
  {
    name: "Docker",
    type: "tool",
    icon: "/dock.svg",
    bgColor: "bg-white dark:bg-white",
    textColor: "text-black dark:text-black",
  },
  {
    name: "Supabase",
    type: "tool",
    icon: "/supabase.svg",
    bgColor: "bg-green-600 dark:bg-green-500",
    textColor: "text-white dark:text-white",
  },
  {
    name: "Git",
    type: "tool",
    icon: "/git.svg",
    bgColor: "bg-orange-600 dark:bg-orange-500",
    textColor: "text-white dark:text-white",
  },
  {
    name: "GitHub",
    type: "tool",
    icon: "/github.svg",
    bgColor: "bg-white dark:bg-gray-800",
    textColor: "text-black dark:text-white",
  },
  {
    name: "GitLab",
    type: "tool",
    icon: "/gitlab.svg",
    bgColor: "bg-orange-500 dark:bg-orange-400",
    textColor: "text-white dark:text-white",
  },
  {
    name: "Nginx",
    type: "tool",
    icon: "/nginx.svg",
    bgColor: "bg-white dark:bg-green-500",
    textColor: "text-black dark:text-white",
  },
  {
    name: "Android",
    type: "language",
    icon: "/android.svg",
    bgColor: "bg-green-600 dark:bg-green-500",
    textColor: "text-white dark:text-white",
  },
  {
    name: "Prisma",
    type: "orm",
    icon: "/prisma.svg",
    bgColor: "bg-indigo-900 dark:bg-indigo-700",
    textColor: "text-white dark:text-white",
  },
  {
    name: "HTML",
    type: "language",
    icon: "/html5.svg",
    bgColor: "bg-orange-600 dark:bg-orange-500",
    textColor: "text-white dark:text-white",
  },
  {
    name: "CSS",
    type: "language",
    icon: "/css3.svg",
    bgColor: "bg-blue-600 dark:bg-blue-500",
    textColor: "text-white dark:text-white",
  },
  {
    name: "MongoDB",
    type: "database",
    icon: "/mongodb.svg",
    bgColor: "bg-green-700 dark:bg-green-600",
    textColor: "text-white dark:text-white",
  },
  {
    name: "PostgreSQL",
    type: "database",
    icon: "/postgresql.svg",
    bgColor: "bg-blue-800 dark:bg-blue-600",
    textColor: "text-white dark:text-white",
  },
  {
    name: "TypeScript",
    type: "language",
    icon: "/ts.svg",
    bgColor: "bg-blue-700 dark:bg-blue-600",
    textColor: "text-white dark:text-white",
  },
  {
    name: "JavaScript",
    type: "language",
    icon: "/js.svg",
    bgColor: "bg-yellow-500 dark:bg-yellow-400",
    textColor: "text-black dark:text-black",
  },
  {
    name: "Java",
    type: "language",
    icon: "/java.svg",
    bgColor: "bg-red-600 dark:bg-red-500",
    textColor: "text-white dark:text-white",
  },
  {
    name: "Kotlin",
    type: "language",
    icon: "/kotlin.svg",
    bgColor: "bg-purple-600 dark:bg-purple-500",
    textColor: "text-black dark:text-white",
  },
  {
    name: "C",
    type: "language",
    icon: "/c.svg",
    bgColor: "bg-blue-600 dark:bg-blue-500",
    textColor: "text-white dark:text-white",
  },
  {
    name: "AWS",
    type: "platform",
    icon: "/aws.svg",
    bgColor: "bg-orange-500 dark:bg-orange-400",
    textColor: "text-white dark:text-white",
  },
  {
    name: "Firebase",
    type: "platform",
    icon: "/fire.svg",
    bgColor: "bg-orange-500 dark:bg-orange-400",
    textColor: "text-white dark:text-white",
  },
  {
    name: "Google Cloud",
    type: "platform",
    icon: "/cloud.svg",
    bgColor: "bg-blue-600 dark:bg-blue-500",
    textColor: "text-white dark:text-white",
  },
];
function Stacks() {
  return (
    <section id="stacks" className="w-full"> 
      <div className="flex flex-col w-full  max-w-4xl gap-2 mx-auto px-4">
        <div className="flex items-center justify-between w-full gap-4">
          <span className="whitespace-nowrap shrink-0 text-orange-700 font-bold text-xl dark:text-orange-500">
            {" "}
            ~ Stacks Framework & Tools ~
          </span>{" "}
          <div className="flex-grow h-px border-b border-dashed border-black dark:border-white"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {stacks.map((stack) => (
            <div
              key={stack.name}
              className="flex flex-col items-center justify-center"
            >
              <StackItem
                name={stack.name}
                icon={stack.icon || ""}
                bgColor={stack.bgColor}
                textColor={stack.textColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const StackItem = ({
  name,
  icon,
  bgColor,
  textColor,
}: {
  name: string;
  icon: string;
  bgColor?: string;
  textColor?: string;
}) => {
  return (
    <span
      className={`flex gap-2 -rotate-2 hover:rotate-0 justify-center items-center px-1 py-1 dark:shadow-[2px_2px_0px_rgba(255,255,255,0.7)] ${bgColor || "bg-gray-200 dark:bg-gray-700"} ${textColor || "text-black dark:text-white"} shadow-[2px_2px_0px_rgba(0,0,0,0.7)] transition-all duration-300`}
    >
      {icon && <Image src={icon} alt={name} width={28} height={28} />}
      <span className="font-semibold whitespace-nowrap text-sm">{name}</span>
    </span>
  );
};

export default Stacks;
