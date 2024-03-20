import React from "react";
import { useState, useEffect } from "react";
import classes from "./brendsToMain.module.css";
import { brendsArr } from "./brend";

export const BrendsToMain = () => {
  const [page, setPage] = useState(1);

  const onNextClick = () => {
    setPage((prev) => prev + 1);
  };

  const onPrevClick = () => {
    setPage((prev) => prev - 1);
  };

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  useEffect(() => {
    const intervalId = setInterval(
      () => setPage(getRandomNumber(1, Math.ceil(brendsArr.length / 4))),
      2000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const limitBrendsOfPage = page * 4;
  const beginBrendsOfPage = limitBrendsOfPage - 4;

  return (
    <div className={classes.brendWrap}>
      <div className={classes.brendTitle}>
        <p>Наши бренды</p>
      </div>
      <div className={classes.brendContent}>
        {brendsArr
          ?.slice(beginBrendsOfPage, limitBrendsOfPage)
          .map((showBrends, index) => (
            <img
              key={index}
              className={classes.brendContainerPic}
              src={showBrends}
              alt=""
            />
          ))}
      </div>
    </div>
  );
};
