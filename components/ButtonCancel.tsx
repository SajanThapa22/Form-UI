import React from "react";

interface Props {
  text: string;
}

const ButtonCancel = ({ text }: Props) => {
  return (
    <button
      type="button"
      className="cursor-pointer box-border focus:outline-none px-10 py-2 text-blue-950 border-[2px] border-blue-950 rounded-[4px] text-center capitalize text-sm"
    >
      {text}
    </button>
  );
};

export default ButtonCancel;
