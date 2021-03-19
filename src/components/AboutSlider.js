import React, { useState, useEffect } from "react";
import gsap from "gsap";

const AboutSlider = () => {
  const [counter, setCounter] = useState(1);
  const tl = gsap.timeline();

  const incrementCounter = () => {
    // fade out current slide

    if (counter === 5) {
      tl.to(`.slide-${5} h2 div`, {
        duration: 0.8,
        y: -300,
        // opacity: 0,
        ease: "power4.in",
        stagger: {
          amount: 0.1,
        },
      })
        .to(`.slide-${5} p div`, {
          duration: 0.8,
          y: -300,
          delay: -0.6,
          // opacity: 0,
          ease: "power4.in",
          stagger: {
            amount: 0.1,
          },
        })
        .set(`.slide-${5}`, {
          css: { display: "none" },
        })
        .set([`.slide-${5} h2 div`, `.slide-${5} p div`], {
          y: 0,
        })
        .set(`.slide-${1}`, {
          css: { display: "block" },
        })
        .from(`.slide-${1} h2 div`, {
          duration: 0.8,
          y: 300,
          // opacity: 0,
          ease: "power4.out",
          stagger: {
            amount: 0.1,
          },
        })
        .from(`.slide-${1} p div`, {
          duration: 0.8,
          delay: -0.6,
          y: 300,
          // opacity: 0,
          ease: "power4.out",
          stagger: {
            amount: 0.1,
          },
        });
      setCounter(1);
    } else {
      tl.to(`.slide-${counter} h2 div`, {
        duration: 0.8,
        y: -300,
        // opacity: 0,
        ease: "power4.in",
        stagger: {
          amount: 0.1,
        },
      })
        .to(`.slide-${counter} p div`, {
          duration: 0.8,
          y: -300,
          delay: -0.6,
          // opacity: 0,
          ease: "power4.in",
          stagger: {
            amount: 0.1,
          },
        })
        .set(`.slide-${counter}`, {
          css: { display: "none" },
        })
        .set([`.slide-${counter} h2 div`, `.slide-${counter} p div`], {
          y: 0,
        })
        .set(`.slide-${counter + 1}`, {
          css: { display: "block" },
        })
        .from(`.slide-${counter + 1} h2 div`, {
          duration: 0.8,
          y: 300,
          // opacity: 0,
          ease: "power4.out",
          stagger: {
            amount: 0.1,
          },
        })
        .from(`.slide-${counter + 1} p div`, {
          duration: 0.8,
          delay: -0.6,
          y: 300,
          // opacity: 0,
          ease: "power4.out",
          stagger: {
            amount: 0.1,
          },
        });
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".slide-1", {
      css: { display: "block" },
    });
  }, []);

  return (
    <section className="s-slider-text">
      <div className="s-slider-container">
        <div className="s-slider-head">
          <h3>Values</h3>
          <div className="s-slider-indicator">
            0<span className="i-active">{counter}</span>
            {" / 0"}
            <span className="i-total">5</span>
          </div>
        </div>
        <div className="s-slider-slides">
          <div className="s-slider-slide slide-1">
            <div className="s-slider-align">
              <div className="s-slider-column">
                <h2>
                  <div>Trust </div>
                  <div>your </div>
                  <div>gut.</div>
                </h2>
              </div>
              <div className="s-slider-column">
                <p>
                  <div>We make things that matter. We challenge</div>
                  <div>eachother to be audacious and follow our</div>
                  <div>instincts.</div>
                </p>
              </div>
            </div>
          </div>

          <div className="s-slider-slide slide-2">
            <div className="s-slider-align">
              <div className="s-slider-column">
                <h2>
                  <div>Learning </div>
                  <div>over </div>
                  <div>executing.</div>
                </h2>
              </div>
              <div className="s-slider-column">
                <p>
                  <div>We are constantly learning over</div>
                  <div>executing. We get out of our comfort zone</div>
                  <div>and constantly progress.</div>
                </p>
              </div>
            </div>
          </div>

          <div className="s-slider-slide slide-3">
            <div className="s-slider-align">
              <div className="s-slider-column">
                <h2>
                  <div>Distribute, </div>
                  <br />
                  <div>not </div>
                  <div>concentrate.</div>
                </h2>
              </div>
              <div className="s-slider-column">
                <p>
                  <div>We believe that sharing is essential to </div>
                  <div>progress. By mixing minds and knowledge,</div>
                  <div>the best ideas come to life.</div>
                </p>
              </div>
            </div>
          </div>

          <div className="s-slider-slide slide-4">
            <div className="s-slider-align">
              <div className="s-slider-column">
                <h2>
                  <div>Think </div>
                  <div>global,</div>
                  <br />
                  <div>live </div>
                  <div>local.</div>
                </h2>
              </div>
              <div className="s-slider-column">
                <p>
                  <div>We work from all over the world with</div>
                  <div>people from all walks of life, religions and</div>
                  <div>cultures. Mix is our strength.</div>
                </p>
              </div>
            </div>
          </div>

          <div className="s-slider-slide slide-5">
            <div className="s-slider-align">
              <div className="s-slider-column">
                <h2>
                  <div>Excellence </div>
                  <div>isn't </div>
                  <br />
                  <div>an </div>
                  <div>option.</div>
                </h2>
              </div>
              <div className="s-slider-column">
                <p>
                  <div>We work hard to ensure results beyond</div>
                  <div>expectations. We go off the beaten track</div>
                  <div>beacuase it's the only way to obtain</div>
                  <div>extraordinary results.</div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="s-slider-nav">
          <span onClick={incrementCounter}>{">"}</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSlider;
