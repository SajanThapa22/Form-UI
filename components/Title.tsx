import React from "react";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <h1 className="text-[22px] font-semibold text-black uppercase mb-8">
      {title}
    </h1>
  );
};

export default Title;
