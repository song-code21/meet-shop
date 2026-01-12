import React from "react";
import clsx from "clsx";

type InputProps = {
  label?: string;
  error?: string;
  success?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  full?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

const Input = ({
  label,
  error,
  success,
  size = "md",
  full = true,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: InputProps) => {
  const sizes = {
    sm: "text-sm py-1.5",
    md: "text-base py-2",
    lg: "text-lg py-3",
  } as const;
  return (
    <div className={clsx("flex flex-col gap-1", full && "w-full")}>
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-brand-gray900">
          {label}
        </label>
      )}

      <div
        className={clsx(
          "flex items-center gap-2 px-3 border rounded-base transition-all bg-white",
          sizes[size],

          disabled
            ? "bg-brand-gray100 text-brand-gray400 cursor-not-allowed opacity-60"
            : error
            ? "border-brand-danger focus:border-brand-danger focus:ring-2 focus:ring-brand-danger/30"
            : success
            ? "border-brand-success"
            : "border-brand-gray200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary-light/40",

          className
        )}
      >
        {leftIcon && <span className="text-brand-gray600">{leftIcon}</span>}

        <input
          disabled={disabled}
          className="flex-1 outline-none bg-transparent"
          {...props}
        />

        {rightIcon && <span className="text-brand-gray600">{rightIcon}</span>}
      </div>

      {error && <p className="text-brand-danger text-xs">{error}</p>}
    </div>
  );
};

export default Input;
