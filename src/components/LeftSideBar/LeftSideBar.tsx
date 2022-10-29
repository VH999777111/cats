import React from "react";

import { getCurrentModeStyle } from "../../utils/generate.classnames.helper";

import { useAppSelector } from "../../utils/hooks/redux";

import { Link } from "react-router-dom";

import "./LeftSideBar.scss";

const ALL_CATEGORIES = [
  "boxes",
  "clothes",
  "hats",
  "skins",
  "space",
  "sunglasses",
  "ties",
];

const LeftSideBar = () => {
  const isDarkMode = useAppSelector(({ global }) => global.isDarkMode);

  return (
    <div className={getCurrentModeStyle(isDarkMode, "left-sidebar-wrapper")}>
      <div className="categories-list">
        {ALL_CATEGORIES.map((category) => {
          return (
            <Link className="category" to={`/cats/${category}`}>
              {category}
            </Link>
          );
        })}
        <Link className="category" to="/">
          HOME
        </Link>
        <Link className="category" to="/about">
          ABOUT
        </Link>
      </div>
    </div>
  );
};

export default LeftSideBar;
