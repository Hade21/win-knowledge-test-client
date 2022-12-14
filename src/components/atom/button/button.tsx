import React from "react";
import { ButtonProps } from "../../../../interface.model";

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className="h-fit w-full rounded bg-merah px-4 py-3 text-white md:w-fit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
