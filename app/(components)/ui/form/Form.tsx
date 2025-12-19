"use client";

import React from "react";
import clsx from "clsx";

type FormProps = {
  children: React.ReactNode;
  className?: string;
} & React.FormHTMLAttributes<HTMLFormElement>;

const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <form className={clsx("flex flex-col gap-6", className)} {...props}>
      {children}
    </form>
  );
};

export default Form;
