import React from "react";
import portfolio from "../../../../Images/portfolio.png";
import "./adssection.scss";
import IndividualUser from "./util/IndividualUser/IndividualUser";

const AdsSection = () => {
  return (
    <div className="AdsSection__Wrapper">
      <div className="inner__Wrapper">
        <div className="upperPart">
          <div className="title">Promotions</div>
          <div className="banner__Image">
            <img src={ portfolio } alt="bannerImage__Promotion" />
          </div>
          <div className="banner__Info">
            <p>
                checkout my portfolio 🚀 <a href="https://thirsty-nobel-7579d3.netlify.app/">here</a>:
                Also follow me in <a href="https://www.instagram.com/rozen_2007/">instagram</a>
            </p>
          </div>
        </div>
        <div className="lowerPart">
          <div className="suggestions__Section">
            <div className="suggestions__Text">
              <p>Suggestions</p>
            </div>
            <IndividualUser />
            <IndividualUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
