import React from "react";

import PrimaryLayout from "../../layouts/PrimaryLayout";
import Diary from "./diary";
import Exercise from "./exercise";
import Graph from "./graph";
import Navigate from "./navigate";

const Home = () => {
  return (
    <PrimaryLayout>
      <div className="max-w-screen-lg mx-auto mt-16">
        <Navigate />
        <Graph />
        <Exercise />
        <Diary />
      </div>
    </PrimaryLayout>
  );
};

export default Home;
