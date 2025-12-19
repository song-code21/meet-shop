"use client";

import React from "react";
import clsx from "clsx";

type RadioProps = {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  checked,
  onChange,
  label,
  disabled = false,
  id,
  className,
  ...props
}: RadioProps) => {
  return (
    <label
      htmlFor={id}
      className={clsx(
        "flex items-center gap-2 cursor-pointer select-none",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <input
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="hidden peer"
        {...props}
      />

      <div
        className={clsx(
          "w-5 h-5 rounded-full border flex items-center justify-center",
          "border-brand-primary peer-checked:border-brand-primary",
          "peer-focus:ring-2 peer-focus:ring-brand-primary/40",
          disabled && "bg-gray-200 border-gray-300"
        )}
      >
        <div
          className={clsx(
            "w-2.5 h-2.5 rounded-full bg-brand-primary transition-opacity",
            checked ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {label && <span className="text-sm text-brand-gray900">{label}</span>}
    </label>
  );
};

export default Radio;
