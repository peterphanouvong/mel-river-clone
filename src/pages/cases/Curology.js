import React, { useEffect, useState } from "react";

// Animations
import gsap from "gsap";
import { motion } from "framer-motion";
import useWindowDimensions from "../../util/useWindowDimensions";

// Images
import SmallOne from "../../assets/curology-small-1.png";
import BigOne from "../../assets/curology-big-1.webp";
import SmallTwo from "../../assets/curology-small-2.png";
import BigTwo from "../../assets/curology-big-2.png";

const tl = gsap.timeline();

const titleAnimation = () => {
  tl.from([".title", ".scroll-down"], {
    duration: 1.2,
    ease: "power3.out",
    delay: 1,
    opacity: 0,
  });

  tl.from(".subtitle div", {
    duration: 1.2,
    y: "20vw",
    ease: "power3.out",
    delay: -1.2,
    skewY: 10,
    stagger: {
      amount: 0.3,
    },
  });
};

const Curology = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(
    useWindowDimensions()
  );

  useEffect(() => {
    titleAnimation();
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
    <div className="case-page">
      <div className="case-hero">
        <div className="hero-container">
          <motion.div
            style={{
              transform: `scale(${
                1 + (1 / 3) * (scrollY / windowDimensions.height)
              })`,
              transition: "ease-out 0.3s",
            }}
            className="curology"
          ></motion.div>
        </div>

        <div className="case-hero-title">
          <h3 className="title">Curology</h3>
          <h2 className="subtitle">
            <div className="subtitle-div">A custom formula for your</div>
          </h2>
          <h2 className="subtitle">
            <div className="subtitle-div"> skins unique needs.</div>
          </h2>
          <motion.div
            className="scroll-down"
            style={{ opacity: 1 - scrollY / windowDimensions.height }}
          >
            Scroll Down
          </motion.div>
        </div>
      </div>
      <section className="s-info">
        <div className="s-info-container">
          <div className="s-info-quote">
            <p>
              Big zits? Clogged pores? Occasional breakouts? Lose the
              one-size-fits-all drugstore stuff. Your custom formula mixes
              ingredients you can’t get off the shelf — and has your name on the
              label.
              <br />
              Forget “custom” algorithms. You’re matched with a Curology
              provider who gets to know your skin. They’ll ask questions, check
              your progress, and stick by you.
            </p>
          </div>
          <div className="s-info-services">
            <h3>Services</h3>
            <ul>
              <li>Brand Strategy</li>
              <li>eCommerce Design</li>
              <li>eCommerce Development</li>
              <li>Content Creation</li>
              <li>Marketing</li>
              <li>Conversion Optimisation</li>
            </ul>
            <div className="view-website">
              <a target="_blank" href="https://curology.com/">
                View website
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="s-big-img-container">
        <img className="s-big-img" src={BigOne} alt="" />
      </section>
      <section className="s-small-img-container">
        <img className="s-small-img" src={SmallOne} alt="" />
      </section>
      <section className="s-big-img-container">
        <img className="s-big-img" src={BigTwo} alt="" />
      </section>
      <section className="s-small-img-container">
        <img className="s-small-img" src={SmallTwo} alt="" />
      </section>
    </div>
  );
};

export default Curology;
