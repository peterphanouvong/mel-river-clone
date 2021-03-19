import React, { useRef, useState } from "react";
// import { useHistory } from "react-router-dom";
import gsap from "gsap";
import { Link, Redirect, withRouter } from "react-router-dom";

const DelayLink = (props) => {
  const { className, to, delay, id, history } = props;
  const c = useRef(null);
  const image = require(`../assets/${id}.png`);

  const [redirect, setRedirect] = useState(false);

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={to} />;
    }
  };

  const handleClick = () => {
    const tl = gsap.timeline();

    tl.set(".case-transition", {
      css: {
        height: "49.9999%",
        width: "33.3333%",
        left: c.current.offsetLeft,
        top: c.current.offsetTop,
      },
    })
      .set(".case-transition-cover", {
        backgroundImage: `url(${image})`,
      })
      .to(".case-transition", {
        duration: 0.3,
        opacity: 1,
      })
      .to(".case-transition", {
        duration: 1,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        ease: "power4.in",
      });

    setTimeout(() => {
      setRedirect(true);
    }, delay);
  };

  return (
    <div ref={c} id={id} onClick={handleClick} className={className}>
      {renderRedirect()}
      {props.children}
    </div>
  );
};

export default withRouter(DelayLink);
