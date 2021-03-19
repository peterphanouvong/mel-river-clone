import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

// GSAP
import gsap from "gsap";
// Styles
import "./styles/App.scss";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Approach from "./pages/Approach";
import Services from "./pages/Services";
import About from "./pages/About";
import Navigation from "./components/Navigation";

// Cases
import Curology from "./pages/cases/Curology";
import YourSpace from "./pages/cases/YourSpace";
import Lumin from "./pages/cases/Lumin";

import Scroll from "./components/scoll/Scroll";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "CaseStudies", Component: CaseStudies },
  { path: "/approach", name: "Approach", Component: Approach },
  { path: "/services", name: "Services", Component: Services },
  { path: "/about", name: "About", Component: About },
  { path: "/cases/curology", name: "Curology", Component: Curology },
  { path: "/cases/yourspace", name: "YourSpace", Component: YourSpace },
  { path: "/cases/lumin", name: "Lumin", Component: Lumin },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const location = useLocation();

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", {
      duration: 0,
      css: {
        visibility: "visible",
      },
    });

    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    const debouncedHandleResize = debounce(handleResize, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header dimensions={dimensions} />
      <div className="content-section">
        {/* <AnimatePresence exitBeforeEnter> */}
        <Switch location={location} key={location.pathname}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} exact>
              <Scroll>
                <Component />
              </Scroll>
            </Route>
          ))}
        </Switch>
        {/* </AnimatePresence> */}
      </div>
      <Navigation />
    </div>
  );
}

export default App;
