import React from "react";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

const TrueDelayLink = (props) => {
  const history = useHistory();
  const { to, delay } = props;

  const handleClick = () => {
    const tl = gsap.timeline();
    console.log("fade out");
    tl.to(".content-section div", {
      duration: 0.5,
      opacity: 0,
    });
    setTimeout(() => {
      history.push(to);
    }, delay);
  };

  return <a onClick={handleClick}>{props.children}</a>;
};

export default TrueDelayLink;
