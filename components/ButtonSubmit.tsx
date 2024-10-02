import React from "react";

interface Props {
  text: string;
  type?: "submit" | "reset" | "button";
  disabled: boolean;
}

const ButtonSubmit = ({ text, type, disabled = true }: Props) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="cursor-pointer border-none focus:outline-none px-10 py-2 bg-blue-950 rounded-[4px] text-center text-white capitalize text-sm"
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
