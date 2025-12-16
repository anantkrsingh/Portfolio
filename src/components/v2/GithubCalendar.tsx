"use client";

import { GitHubCalendar as GitHubCalendarComponent } from "react-github-calendar";
import { useTheme } from "next-themes";

function GithubCalendar() {
  const { theme } = useTheme();

  const lightTheme = {
    light: ["#ebedf0", "#c6c6c6", "#8c8c8c", "#525252", "#000000"],
  };

  const darkTheme = {
    dark: ["#161b22", "#30363d", "#484f58", "#6e7681", "#8b949e"],
  };

  return (
    <div className="mt-10 w-full overflow-x-auto">
      <div className="min-w-max scale-[0.9] sm:scale-100 origin-left">
        <GitHubCalendarComponent
          username="anantkrsingh"
          showColorLegend={false}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          theme={theme === "dark" ? darkTheme : lightTheme}
        />
      </div>
    </div>
  );
}

export default GithubCalendar;
