import "./Exercise.scss";

import React from "react";

const Exercise = () => {
  return (
    <div className="bg-[#2E2E2E] p-6 my-8">
      <div className="flex gap-6 items-center text-white mb-4">
        <h4 className="text-sm">
          MY <br /> EXERCISE
        </h4>
        <time className="text-lg">2021.05.21</time>
      </div>
      <div className="scroll-wrap">
        <ul className="grid  grid-cols-2 gap-x-12 gap-y-4 list-disc list-inside text-white">
          {[...Array(100)].map((x, i) => (
            <li
              key={i}
              className="flex text-sm justify-between items-center border-b border-[#777777] "
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-white mb-4"></div>
                <div>
                  <div className="text-white">家事全般（立位・軽い）</div>
                  <span className="text-yellow">26kcal</span>
                </div>
              </div>
              <div className="text-yellow">10 min</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exercise;
