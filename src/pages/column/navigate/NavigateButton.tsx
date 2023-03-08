import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  link: string;
  description?: string;
}

const NavigateButton: React.FC<Props> = ({ title, description, link }) => {
  return (
    <Link
      to={link}
      className="group relative max-w-[288px] h-[144px]  flex justify-center items-center"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#2E2E2E] bg-opacity-90 transition-opacity"></div>

      <div className="absolute text-center">
        <div className="capitalize text-yellow text-xl mb-2 group-hover:-translate-y-1">
          {title}
        </div>
        <div className="w-14 h-[1px] bg-white mx-auto mb-1"></div>
        <span className="inline-block p-1 text-white text-sm group-hover:translate-y-1">
          {description}
        </span>
      </div>
    </Link>
  );
};

export default NavigateButton;
