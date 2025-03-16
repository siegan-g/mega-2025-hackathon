"use client";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";

export const AnimatedButton = ({ text, transitionText, className, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);  
    }
  };

  return (
    <button
      className={cn(
        "px-4 py-4 rounded-md text-black dark:text-white text-center relative overflow-hidden cursor-pointer",
        className
      )}
      onClick={handleClick}  
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
