import React from "react";

import Footer from "./partials/Footer";
import Header from "./partials/Header";
import ScrollToTop from "./partials/ScrollToTop";

interface Props {
  children?: React.ReactNode;
}

const PrimaryLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PrimaryLayout;
