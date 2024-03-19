import React from "react";
import { useState } from "react";
import classes from "./brendsToMain.module.css";
import { brendsArr } from "./brend";
import { number } from "yup";

export const BrendsToMain = () => {
  const [page, setPage] = useState(1);

  const onNextClick = () => {
    setPage((prev) => prev + 1);
  };

  const onPrevClick = () => {
    setPage((prev) => prev - 1);
  };

  // setInterval(() => {
  //   const rnd = Math.floor(Math.random() * (4 - 1) + 1);
  //   console.log("Прошло 2 секунды" + rnd);
  //   return rnd;
  // }, 2000);

  // const intervalId = setInterval(
  //   function () {
  //     const rnd = Math.floor(Math.random() * (4 - 1) + 1);
  //     console.log("Прошло 2 секунды" + rnd);
  //     return rnd;
  //   },
  //   2000,
  //   rnd
  // );

  // var intervalID = setInterval(myCallback, 2000);

  // function myCallback() {
  //   const rnd = Math.floor(Math.random() * (4 - 1) + 1);
  //   return rnd;
  // }

  // const Timer = () => {
  //   const [number, setNumber] = useState(1);

  //   useEffect(() => {
  //     setTimeout(
  //       () => setNumber(Math.floor(Math.random() * (4 - 1) + 1)),
  //       2000
  //     );
  //   }, [number]);

  //   return number;
  // };
  // console.log(Timer);
  ////

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
      <div className={classes.brendBtnWrap}>
        <button
          className={classes.brendBtn}
          onClick={onPrevClick}
          disabled={page === 1}
        >
          {"<"}
        </button>

        <button
          className={classes.brendBtn}
          onClick={onNextClick}
          disabled={limitBrendsOfPage >= brendsArr.length}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
