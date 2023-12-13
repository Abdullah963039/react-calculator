import { twMerge } from "tailwind-merge";

export function Button({ children, className = "", onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "text-center p-4 rounded-md outline-none dark:text-white font-semibold duration-150 text-xl focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-600 focus-visible:font-bold dark:focus-visible:ring-slate-800 bg-slate-300 hover:bg-slate-300/70 dark:bg-slate-700 dark:hover:bg-slate-700/80 active:shadow-inner",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
