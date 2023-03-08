import "./Achievement.scss";

import React from "react";

const Achievement = () => {
  const circumference = ((2 * 22) / 7) * 120;
  const percent = 75;
  return (
    <div className="bg-transparent h-[312px] w-full bg-[url('/photos/d01.jpg')] bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <svg className="transform -rotate-90 w-72 h-72 text-white radial-progress">
        <circle
          cx="145"
          cy="145"
          r="120"
          strokeWidth="3"
          fill="transparent"
          className="text-gray-700"
        />

        <circle
          cx="145"
          cy="145"
          r="120"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          className="text-white"
        />
        <text
          fill="white"
          color="white"
          className="transform rotate-90"
          x="6.4em"
          y="-8.5em"
        >
          05/21
          <tspan className="text-2xl"> {percent}%</tspan>
        </text>
      </svg>
    </div>
  );
};

export default Achievement;
