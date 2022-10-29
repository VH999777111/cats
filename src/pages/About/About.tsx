import React from "react";

import { useAppSelector } from "../../utils/hooks/redux";

import { IS_DEVELOPMENT } from "../../constants";

import { getCurrentModeStyle } from "../../utils/generate.classnames.helper";

import "./About.scss";

const About = () => {
  const isDarkMode = useAppSelector(({ global }) => global.isDarkMode);
  return (
    <div className={getCurrentModeStyle(isDarkMode, "about-page")}>
      <div className="content">
        <h3>ITS {IS_DEVELOPMENT ? "DEV" : "PROD"} MODE</h3>
      </div>
    </div>
  );
};

export default About;
