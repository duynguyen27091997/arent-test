import React from "react";

import PrimaryLayout from "../../layouts/PrimaryLayout";
import Achievement from "./achievement";
import ChartRate from "./chartRate";
import MealHistory from "./history";
import GroupTransit from "./transit";

const Home = () => {
  return (
    <PrimaryLayout>
      <div className="grid grid-cols-12 ">
        <div className="col-span-5">
          <Achievement />
        </div>
        <div className="col-span-7">
          <ChartRate />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <GroupTransit />
        <MealHistory />
      </div>
    </PrimaryLayout>
  );
};

export default Home;
