"use client";

import React from "react";
import { Controller, Control } from "react-hook-form";

type FormFieldProps = {
  name: string;
  control: Control<any>;
  children: (field: any, fieldState: any) => React.ReactElement;
};

const FormField = ({ name, control, children }: FormFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => children(field, fieldState)}
    />
  );
};

export default FormField;
