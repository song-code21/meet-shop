"use client";

import React from "react";
import clsx from "clsx";

type CheckboxProps = {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  checked,
  onChange,
  label,
  disabled = false,
  className,
  id,
  ...props
}: CheckboxProps) => {
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
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="hidden peer"
        {...props}
      />

      <div
        className={clsx(
          "w-5 h-5 rounded border flex items-center justify-center",
          "border-brand-primary peer-checked:bg-brand-primary",
          "peer-focus:ring-2 peer-focus:ring-brand-primary/40",
          disabled && "bg-gray-200 border-gray-300"
        )}
      >
        <svg
          className={clsx(
            "w-3 h-3 text-white transition-opacity",
            checked ? "opacity-100" : "opacity-0"
          )}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M6 10l3 3 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {label && <span className="text-sm text-brand-gray900">{label}</span>}
    </label>
  );
};

export default Checkbox;
