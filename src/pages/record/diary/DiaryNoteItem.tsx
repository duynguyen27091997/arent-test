import React from "react";
import { DiaryItem } from "src/types";

interface Props {
  item: DiaryItem;
}

const DiaryNoteItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="group cursor-pointer relative text-gray p-4 border-2 border-[#707070] aspect-square hover:bg-orange hover:text-white hover:scale-105 transition-all">
      <div
        className="mb-3 text-lg"
        dangerouslySetInnerHTML={{
          __html: item.time.replace(" ", "<br/>"),
        }}
      ></div>
      <div
        style={
          {
            display: "-webkit-box",
            lineClamp: 5,
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          } as React.CSSProperties
        }
      >
        {item.description}
      </div>
    </div>
  );
};

export default DiaryNoteItem;
