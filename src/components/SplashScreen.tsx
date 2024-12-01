import { useEffect, useState } from "react";
import "../app/globals.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        console.log(prev);
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return prev;
        }
        if (prev >= 40) return prev + 2;
        if (prev >= 60) return prev + 3;
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`flex w-[100vw] h-[100vh] justify-center p-10 items-center backdrop-blur-lg background-transparent z-[1000]`}
    >
      <div className="w-28 h-28 relative flex justify-center items-center">
        <CircularProgressbar value={progress} text={``} />
        <div className="absolute">
          <img
            src={"/v.png"}
            alt={"logo"}
            className={`${
              progress >= 50 ? "rotate-180" : "rotate-0"
            }  opacity-${
              progress / 100
            } transition-all duration-1000  w-16 h-16`}
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
