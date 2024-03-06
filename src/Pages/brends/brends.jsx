import React from "react";
import { useState } from "react";
import classes from "./styles.module.css";
import { brendsArr } from "../../Pages/brends/brend";

export const Brends = () => {

  const [page, setPage] = useState (1);

  const onNextClick = () => {
    setPage((prev) => prev + 1);
  };

  const onPrevClick = () => {
    setPage((prev) => prev - 1);
  };

const limitBrendsOfPage = page * 6;
const beginBrendsOfPage = limitBrendsOfPage - 6;

    return (
        <div className={classes.brendWrap}>
            <div className={classes.brendTitle}>
                <p>Наши бренды</p>
            </div>
            <div className={classes.brendContent}>
                {brendsArr?.slice(beginBrendsOfPage, limitBrendsOfPage)
                .map((showBrends, index) => (
                    <img 
                    key = {index}
                    className={classes.brendContainerPic} 
                    src={showBrends}
                    alt="" />
                )) }

            </div>
            <div className={classes.brendBtnWrap}>
                <button className={classes.brendBtn} 
                onClick={onPrevClick} 
                disabled={page === 1}>{"<"}
                </button>

                <button className={classes.brendBtn} 
                onClick={onNextClick} 
                disabled={limitBrendsOfPage >= brendsArr.length}>{">"}
                </button>
            </div>
        </div>
    );
};