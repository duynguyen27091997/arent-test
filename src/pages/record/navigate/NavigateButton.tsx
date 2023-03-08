import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  link: string;
  photo: string;
  description?: string;
}

const NavigateButton: React.FC<Props> = ({ title, photo, description, link }) => {
  return (
    <Link
      to={link}
      className="relative max-w-[288px] border-yellow border-[24px] aspect-square flex justify-center items-center"
    >
      <img className="w-full h-full object-cover" src={photo} alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-gray bg-opacity-90 transition-opacity"></div>

      <div className="absolute text-center">
        <div className="capitalize text-yellow text-2xl mb-2">{title}</div>
        <span className="inline-block p-1 bg-orange text-white text-sm">
          {description}
        </span>
      </div>
    </Link>
  );
};

export default NavigateButton;
