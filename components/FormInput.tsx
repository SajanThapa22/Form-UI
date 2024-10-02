"use client";

import React from "react";
import { useForm, FieldErrors } from "react-hook-form";

interface Props {
  refName: string; // Ensure refName is a key of FormData
  required: boolean;
  inputId: string;
  inputType: string;
  placeholder?: string;
}

const FormInput = ({
  refName,
  required,
  inputId,
  inputType,
  placeholder,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  return (
    <>
      <input
        id={inputId}
        {...register(refName, { required })}
        type={inputType}
        placeholder={placeholder}
        className="focus:outline-none border border-[#c5c4c4] rounded-[5px] px-4 py-2 ml-auto text-[14px] w-full"
      />
      {errors[refName] && ( // Accessing errors using refName, which is typed correctly
        <p className="text-red-700 ml-auto mr-auto right-0 -translate-x-1/4 mt-2 text-[12px] text-right absolute bottom-0 translate-y-5 h-5 px-5 bg-gray-200 rounded-sm z-50">
          Please enter the field
        </p>
      )}
    </>
  );
};

export default FormInput;
