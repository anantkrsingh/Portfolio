import React from "react";

function SpotifyButton({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) {
  return (
    <button className={`px-12 py-4 md:w-60 gap-2 flex flex-row items-center md:mt-10 w-full rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200 ${otherClasses}`}>
      {position === "left" && icon}
      {title}
      {position === "right" && icon}

    </button>
  );
}

export default SpotifyButton;
