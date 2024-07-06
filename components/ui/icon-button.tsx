import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  className?: string;
  icon: React.ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `rounded-full p-2 flex justify-center items-center border bg-white shadow-md hover:scale-110 transition`,
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
