import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  full?: boolean;
  disabled?: boolean;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  size = "md",
  full = false,
  disabled = false,
  href,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-base transition-all";

  const variants = {
    primary:
      "bg-brand-primary text-white hover:bg-brand-primary-dark active:scale-[0.98]",
    secondary:
      "bg-brand-secondary text-brand-primary-dark hover:bg-brand-primary-light active:scale-[0.98]",
    outline:
      "border border-brand-primary text-brand-primary hover:bg-brand-primary-light/20 active:scale-[0.98]",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    full && "w-full",
    disabledStyles,
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
