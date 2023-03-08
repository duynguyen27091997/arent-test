import React from "react";

import PrimaryLayout from "../../layouts/PrimaryLayout";
import List from "./list";
import Navigate from "./navigate";

const Home = () => {
  return (
    <PrimaryLayout>
      <div className="max-w-screen-lg mx-auto mt-16">
        <Navigate />
        <List />
      </div>
    </PrimaryLayout>
  );
};

export default Home;
