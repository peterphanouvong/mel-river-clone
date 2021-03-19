import React, { useEffect } from "react";
import gsap from "gsap";
import AboutSlider from "../components/AboutSlider";

const team = [
  { name: "Michele", role: "Art Director" },
  { name: "Zhenya", role: "Art Director" },
  { name: "Roy", role: "Creative Developer" },
  { name: "Jonathan", role: "Content Creator" },
  { name: "Jason", role: "Creative Developer" },
  { name: "Victor", role: "Backend Developer" },
  { name: "Max", role: "UI/UX Designer" },
  { name: "Nicolas", role: "Growth Marketing" },
  { name: "Rahul", role: "Copywriter" },
];

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    let duration = 1; //change this
    let pause = 4; // change this

    let stagger = duration + pause;
    let repeatDelay = stagger * (6 - 1) + pause;

    tl.from(".page-overlay", {
      height: 0,
      top: 0,
      display: "block",
    })
      .to(".page-overlay", {
        delay: 0.5,
        duration: 1.2,
        height: "100%",
        display: "none",
        ease: "power4.out",
      })
      .to(".about .header", {
        duration: 0.2,
        delay: -0.4,
        css: { backgroundColor: "black" },
      })
      .from(".about-subtitle", {
        duration: 0.2,
        opacity: 0,
      })
      .from(".about-title span", {
        delay: -0.2,
        duration: 0.8,
        y: "7vw",
        skewY: 5,
        ease: "power4.out",
        stagger: {
          amount: 0.2,
        },
      })
      .set(".page", {
        height: "auto",
      });

    tl.from(".s-team-notification-item", {
      y: 50,
      duration: duration,
      opacity: 0,
      ease: "power4.out",
      stagger: {
        each: stagger,
        repeat: -1,
        repeatDelay: repeatDelay,
      },
    }).to(
      ".s-team-notification-item",
      {
        // delay: -1,
        ease: "power4.in",
        y: -50,
        duration: duration,
        opacity: 0,
        stagger: {
          each: stagger,
          repeat: -1,
          repeatDelay: repeatDelay,
        },
      },
      stagger
    );
  }, []);

  return (
    <>
      <div className="page">
        <div className="about">
          <section className="header">
            <div className="container">
              <div className="about-subtitle">About Us</div>
              <div className="about-title">
                <span>We are obsessed over</span>
              </div>
              <div className="about-title">
                <span>digital-first branding.</span>
              </div>
            </div>
          </section>

          <section className="s-team">
            <div className="s-team-head">
              <h2>People</h2>
            </div>
            <div className="s-team-map">
              <div className="s-team-strokes"></div>
              <div className="s-team-dots"></div>
            </div>
            <div className="s-team-notification">
              <ul>
                <li className="s-team-notification-item">
                  <i className="i-slack"></i>
                  <strong>Peter</strong> sends love to <strong>Tom</strong>
                </li>
                <li className="s-team-notification-item">
                  <i className="i-slack"></i>
                  <strong>Tom</strong> loves <strong>Peter</strong>
                </li>
                <li className="s-team-notification-item">
                  <i className="i-slack"></i>
                  <strong>Michael</strong> sends a new client request to{" "}
                  <strong>Peter</strong>
                </li>
                <li className="s-team-notification-item">
                  <i className="i-slack"></i>
                  <strong>Kevin</strong> wants to send mail to{" "}
                  <strong>Tom</strong>
                </li>
                <li className="s-team-notification-item">
                  <i className="i-slack"></i>
                  <strong>Tom</strong> added <strong>Michal</strong> as a friend
                </li>
                <li className="s-team-notification-item">
                  <i className="i-slack"></i>
                  <strong>Peter</strong> invited <strong>Kevin</strong>
                </li>
              </ul>
            </div>
            <div className="s-team-container">
              <div className="s-team-column">
                <h3>
                  19 talents <br /> in 12 countries.
                </h3>
              </div>
              <div className="s-team-column">
                <p>
                  <strong>
                    We’re fully remote, so that we can always be close to you.
                  </strong>
                </p>
                <br />
                <p>
                  The online world allows us to work from anywhere, at anytime.
                  The notion of time and work schedules no longer matters: we
                  work with the cream of the crop regardless of their physical
                  position on earth. Just like Uber doesn’t hire drivers, we
                  don’t hire folks. We work with independent talents.
                </p>
              </div>
            </div>
            <div className="s-team-list">
              {team.map((member, i) => {
                // const img = require(`../assets/faces/face-${i}.jpg`);
                return (
                  <div className="s-team-member">
                    <div className={`face-img face-img-${i}`}></div>
                    <div className="s-team-member-name">{member.name}</div>
                    <div className="s-team-member-role">{member.role}</div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="s-text-about">
            <div className="s-text-container">
              <div className="s-text-column">
                <h2>
                  Once upon a<br />
                  time in
                  <br />
                  <strike>Hollywood</strike>
                  <br /> Switzerland
                </h2>
              </div>
              <div className="s-text-column">
                <p>
                  Melriver was created by Mehdi Izemmour, a Swiss entrepreneur
                  who has created multiple eCommerce companies.
                </p>
                <p>
                  Back in 2015, Mehdi launched his first eCommerce company whose
                  goal was to bring a new dimension to the world of accessories
                  for Macbook by mixing technology and fashion. That’s also when
                  Mehdi discovered a passion for creating outstanding online
                  shopping experiences.
                </p>
                <p>
                  Melriver was born in 2018 from the ambition to create a studio
                  capable of providing creative services specialized in
                  eCommerce for both internal projects as well as serving
                  external clients.
                </p>
              </div>
            </div>
          </section>
          <AboutSlider />
        </div>
      </div>
      <div className="page-overlay"></div>
    </>
  );
};

export default About;
