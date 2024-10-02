"use client";

import { FormData } from "@/app/register/page";
import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  refName: string;
  required?: boolean;
  options: any[];
  className?: string;
  children?: ReactNode;
}

const FormSelect = ({
  id,
  refName,
  required = false,
  options,
  children,
  className = "",
}: SelectProps) => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm();

  return (
    <div className="relative">
      <select
        id={id}
        {...register(refName, { required: required })}
        className={`border border-[#c5c4c4] text-sm px-4 py-1 rounded-[4px] focus:outline-none focus:border-[#858484] w-full  ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {children}
    </div>
  );
};

export default FormSelect;
