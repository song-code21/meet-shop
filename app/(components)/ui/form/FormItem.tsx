import React from "react";
import clsx from "clsx";

type FormItemProps = {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
};

const FormItem = ({
  label,
  description,
  error,
  required = false,
  className,
  children,
}: FormItemProps) => {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      {label && (
        <label className="text-sm font-medium text-brand-gray900">
          {label}
          {required && <span className="text-brand-danger ml-1">*</span>}
        </label>
      )}

      {children}

      {!error && description && (
        <p className="text-xs text-brand-gray600">{description}</p>
      )}

      {error && <p className="text-xs text-brand-danger">{error}</p>}
    </div>
  );
};

export default FormItem;
