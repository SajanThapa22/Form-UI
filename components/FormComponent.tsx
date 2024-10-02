import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";

interface Props {
  label: string;
  htmlFor: string;
  children: ReactNode;
}

const FormLabelInput = ({ label, htmlFor, children }: Props) => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "all" });

  return (
    <div className="grid grid-cols-[2fr,3fr] gap-6 items-center relative">
      <label
        htmlFor={htmlFor}
        className="text-[12px] font-semibold text-black capitalize text-right text-nowrap"
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormLabelInput;
