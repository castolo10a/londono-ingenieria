import { FC } from "react";
import { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({ title, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`border uppercase text-black border-black font-bold px-8 py-4 transition-all hover:bg-blue-700 hover:border-blue-700 hover:text-white cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
};
