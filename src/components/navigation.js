import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import TrueDelayLink from "../util/TrueDelayLink";

const Navigation = () => {
  const handleFadeOut = () => {
    const tl = gsap.timeline();
  };

  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <TrueDelayLink delay={500} to="/">
                  Case Studies
                </TrueDelayLink>
              </li>

              <li>
                <TrueDelayLink delay={500} to="/about">
                  About
                </TrueDelayLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <TrueDelayLink onClick={handleFadeOut} to="/contact">
                    Get in touch with us
                  </TrueDelayLink>
                </li>
                <li>
                  <TrueDelayLink onClick={handleFadeOut} to="/audit">
                    Get a free audit
                  </TrueDelayLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>Route du Jura 49</li>
                <li>1700 Fridbourg</li>
                <li>Route du Jura 49</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+41 (0) 75 510 28 70</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy and Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
