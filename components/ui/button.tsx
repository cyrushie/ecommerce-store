import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, type = "button", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "w-auto px-5 py-3 rounded-full border-none disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition bg-black text-white font-semibold",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
