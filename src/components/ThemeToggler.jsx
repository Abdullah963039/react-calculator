import { useState } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export default function ThemeToggler() {
  const [isDark, setIsDark] = useState(() => {
    return document.body.classList.contains("dark");
  });

  function handleToggleTheme() {
    const body = document.body;
    setIsDark((prev) => !prev);

    if (!isDark) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }

  return (
    <>
      <div
        className="absolute outline-none top-4 right-4 overflow-hidden rounded-full cursor-pointer focus-visible:ring-2 dark:focus-visible:ring-slate-700 focus-visible:ring-slate-500"
        onClick={handleToggleTheme}
        tabIndex={0}
      >
        <div
          className={`w-full h-full z-10 bg-gradient-to-br rounded-full left-0 top-0 absolute from-emerald-500 to-blue-500 dark:from-emerald-700 dark:to-blue-700`}
        >
          {/* Circle */}
          <div
            className={twMerge(
              "w-2/5 aspect-square rounded-full bg-white dark:bg-slate-200 absolute top-1/2 -translate-y-1/2",
              isDark ? "right-1.5" : "left-1.5"
            )}
          ></div>
        </div>
        {/* Buttons wrapper */}
        <div className="flex relative justify-evenly items-center bg-white py-2 w-16 rounded-full">
          <BsFillSunFill
            className={twMerge(
              "w-4 h-4 text-yellow-500",
              isDark ? "-z-20" : "z-20"
            )}
          />
          <BsMoonStarsFill
            className={twMerge(
              "w-4 h-4 text-slate-700",
              isDark ? "z-20" : "-z-20"
            )}
          />
        </div>
      </div>
    </>
  );
}
