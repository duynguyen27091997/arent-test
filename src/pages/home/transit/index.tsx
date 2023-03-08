import React from "react";
import CupIcon from "src/components/icons/CupIcon";
import KnifeIcon from "src/components/icons/KnifeIcon";

import TransitBox from "./TransitBox";

const transitList = [
  { text: "Morning", icon: <KnifeIcon /> },
  { text: "Lunch", icon: <KnifeIcon /> },
  { text: "Dinner", icon: <KnifeIcon /> },
  { text: "Snack", icon: <CupIcon /> },
];

const GroupTransit = () => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center px-32">
        {transitList.map((item, index) => (
          <TransitBox key={index} text={item.text} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default GroupTransit;
