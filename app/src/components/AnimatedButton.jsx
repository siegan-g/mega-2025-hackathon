"use client";
import { cn } from "../lib/utils";

export const AnimatedButton = ({ text, transitionText, className }) => {
  return (
    <button
      className={cn(
        "px-4 py-4 rounded-md text-black dark:text-white text-center relative overflow-hidden cursor-pointer",
        className
      )}
    >
      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
        {text}
      </span>
      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
        {transitionText}
      </div>
    </button>
  );
};
