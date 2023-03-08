import "./TransitBox.scss";

import React from "react";

interface Props {
  text: string;
  icon?: React.ReactElement;
}

const TransitBox: React.FC<Props> = ({ text, icon }) => {
  return (
    <div className="transit-box bg-gradient-to-bl from-orange to-yellow hover:from-yellow hover:to-orange text-white flex flex-col justify-center items-center cursor-pointer">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default TransitBox;
