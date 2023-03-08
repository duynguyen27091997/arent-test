import React from "react";

import NavigateButton from "./NavigateButton";

const navigateList: React.ComponentProps<typeof NavigateButton>[] = [
  {
    title: "BODY RECORD",
    description: "自分のカラダの記録",
    photo: "/photos/MyRecommend-1.jpg",
    link: "#",
  },
  {
    title: "MY EXERCISE",
    description: "自分の運動の記録",
    photo: "/photos/MyRecommend-2.jpg",
    link: "#",
  },
  {
    title: "MY DIARY",
    description: "自分の日記",
    photo: "/photos/MyRecommend-3.jpg",
    link: "#",
  },
];

const Navigate = () => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between gap-8">
        {navigateList.map((item, index) => (
          <NavigateButton key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Navigate;
