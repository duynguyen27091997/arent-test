import classNames from "classnames";
import React, { useState } from "react";
import ScrollToTopIcon from "src/components/icons/ScrollToTopIcon";
import useEventListener from "src/hooks/useEventListener";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEventListener("scroll", () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  });

  const scrollToTop = (e: Event) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <div className={classNames("fixed right-10 top-1/2", { invisible: !visible })}>
      <span
        onClick={scrollToTop}
        className="block relative cursor-pointer hover:-translate-y-2 transition-transform duration-200"
      >
        <ScrollToTopIcon />
      </span>
    </div>
  );
};

export default ScrollToTop;
