import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { openMenu, closeMenu } from "../animations/menuAnimations";
import { useHistory } from "react-router-dom";

const Header = ({ dimensions }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      setMenuOpen(false);
    });
  }, [history]);

  useEffect(() => {
    //Listening for page changes.
    if (menuOpen === true) {
      openMenu(dimensions.width);
    } else if (menuOpen === false) {
      closeMenu();
    }
  }, [menuOpen]);

  return (
    <>
      <div className="logo">
        <NavLink exact to="/">
          <h3>AGENCY.</h3>
        </NavLink>
      </div>
      <div className="nav-toggle">
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="menu-top">
            <span></span>
          </div>
          <div className="menu-bot">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);
