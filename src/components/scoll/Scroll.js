import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../../util/useWindowDimensions";

const Scroll = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(
    useWindowDimensions()
  );

  useEffect(() => {
    function logit() {
      setScrollY(window.pageYOffset);
    }
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);
  return (
    <motion.div
      style={{
        transform: `translate3d(0px, ${scrollY - 1}px, 0px)`,
      }}
    >
      <motion.div
        style={{
          transform: `translate3d(0px, ${-scrollY}px, 0px)`,
          transition: "1.5s cubic-bezier(.11,.25,0,1.02)",
        }}
        className="a-scroll"
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
};

export default Scroll;
