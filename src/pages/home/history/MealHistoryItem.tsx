import React from "react";
import { HistoryItem } from "src/types";

interface Props {
  item: HistoryItem;
}

const MealHistoryItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="group cursor-pointer relative overflow-hidden w-full h-[234px] aspect-square">
      <img
        className="w-full h-full group-hover:scale-105 object-cover transition-transform duration-200"
        src={item.photo}
        alt=""
      />
      <div className="absolute py-1 px-2 bottom-0 left-0 text-white bg-[#FFCC21] text-sm">
        {item.description}
      </div>
    </div>
  );
};

export default MealHistoryItem;
