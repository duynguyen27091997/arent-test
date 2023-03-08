import React from "react";
import { ColumnItem } from "src/types";

interface Props {
  item: ColumnItem;
}

const ColumnBoxItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="group cursor-pointer relative overflow-hidden w-full mb-4">
      <div className="relative h-[145px]">
        <img
          className="w-full h-full group-hover:scale-105 object-cover transition-transform duration-200"
          src={item.photo}
          alt=""
        />
        <div className="absolute py-1 px-2 bottom-0 left-0 text-white bg-[#FFCC21] text-sm">
          {item.description}
        </div>
      </div>
      <div className="py-2 text-gray">{item.content}</div>
      <div className="flex gap-2">
        {item.tags?.map((tag) => (
          <div key={tag} className="text-orange text-sm hover:underline">
            #{tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnBoxItem;
