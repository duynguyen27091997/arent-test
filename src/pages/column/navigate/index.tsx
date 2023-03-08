import React from "react";

import NavigateButton from "./NavigateButton";

const navigateList: React.ComponentProps<typeof NavigateButton>[] = [
  {
    title: "RECOMMENDED COLUMN",
    description: "オススメ",
    link: "#",
  },
  {
    title: "RECOMMENDED DIET",
    description: "ダイエット",
    link: "#",
  },
  {
    title: "RECOMMENDED BEAUTY",
    description: "美容",
    link: "#",
  },
  {
    title: "RECOMMENDED HEALTH",
    description: "健康",
    link: "#",
  },
];

const Navigate = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-4 gap-8">
        {navigateList.map((item, index) => (
          <NavigateButton key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Navigate;
