import React, { useEffect, useState } from "react";

// GSAP
import gsap from "gsap";
import { motion } from "framer-motion";

// Components
import Banner from "../components/Banner";
import Cases from "../components/Cases";
import IntroOverlay from "../components/IntroOverlay";
import CaseOverlay from "../components/CaseOverlay";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".line span", {
    duration: 1.2,
    y: "5vw",
    ease: "power3.out",
    delay: 1,
    skewY: 5,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", {
      duration: 1.5,
      height: 0,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4,
      },
    })
    .to(".overlay-bottom", {
      duration: 1.5,
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", { duration: 0, css: { display: "none" } })
    .from(".case-image img", {
      duration: 1.6,
      scale: 1.4,
      ease: "expo.inOut",
      delay: -1.8,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);
  return (
    <div
      // initial="initial"
      // animate="in"
      // exit="out"
      // variants={pageVariants}
      className="home"
    >
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <Cases />
      <CaseOverlay />
    </div>
  );
};

export default Home;
