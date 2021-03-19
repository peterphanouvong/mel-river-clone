import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../util/useWindowDimensions";

const Banner = () => {
  const { width } = useWindowDimensions();

  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            {width >= 768 ? (
              <>
                <div className="line">
                  <span>We craft eCommerce brands,</span>
                </div>
                <div className="line">
                  <span>driven by instinct.</span>
                </div>
              </>
            ) : (
              <>
                <div className="line">
                  <span>We craft eCommerce</span>
                </div>
                <div className="line">
                  <span>brands, driven by instinct.</span>
                </div>
              </>
            )}
          </h2>
          <div className="btn-row">
            <Link to="/about">More about us {">"}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
