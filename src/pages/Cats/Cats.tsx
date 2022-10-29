import React, { useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux";
import { globalOp } from "../../store/global";

import { getCurrentModeStyle } from "../../utils/generate.classnames.helper";

import CatCard from "../../components/CatCard/CatCard";

import { useParams } from "react-router-dom";

import "./Cats.scss";

const CATS_ID_CATEGORY: any = {
  boxes: "5",
  clothes: "15",
  hats: "1",
  skins: "14",
  space: "2",
  sunglasses: "4",
  ties: "7",
};

const Cats = () => {
  const { category } = useParams();

  const currentCategoryId = CATS_ID_CATEGORY[category || "boxes"];

  const isLoading = useAppSelector(({ global }) => global.isLoading);
  const catsData = useAppSelector(({ global }) => global.cats);

  const isDarkMode = useAppSelector(({ global }) => global.isDarkMode);

  const currentPage = useRef(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    currentPage.current = 1;
    dispatch(globalOp.getCatsDataByCategory(currentCategoryId));
  }, [category, dispatch]);

  const handleMoreButtonClick = () => {
    currentPage.current += 1;
    dispatch(
      globalOp.getMoreDataByCategory(currentCategoryId, currentPage.current)
    );
  };

  return (
    <div className={getCurrentModeStyle(isDarkMode, "cats-page")}>
      <div className="content">
        {isLoading ? (
          <h3>LOADING...</h3>
        ) : (
          catsData?.map((cat) => {
            return <CatCard key={cat.id} imgSrc={cat.url} />;
          })
        )}
      </div>
      <div onClick={handleMoreButtonClick} className="load-more-button">
        <span>LOAD MORE</span>
      </div>
    </div>
  );
};

export default Cats;
