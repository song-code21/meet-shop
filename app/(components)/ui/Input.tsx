import React from "react";
import clsx from "clsx";

type InputProps = {
  label?: string;
  error?: string;
  type?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  error,
  type = "text",
  className,
  ...props
}: InputProps) => {
  return (
    <div className="w-full mb-4">
      {/* 라벨 */}
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}

      {/* 인풋 */}
      <input
        type={type}
        className={clsx(
          "w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition",
          error && "border-red-500",
          className
        )}
        {...props}
      />

      {/* 에러 메시지 */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
export default Input;
