import React from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}
const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `w-[300px] rounded-md h-fit bg-neutral-900 flex flex-col gap-3 p-2`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Box;
