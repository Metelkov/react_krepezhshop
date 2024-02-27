import React from "react";
import { useState } from "react";
import classes from "./styles.module.css";
import { brendsArr } from "../../Pages/brends/brend";

export const Brends = () => {


  const [page, setPage] = useState (1);
  const onPageClick = (e) => {
      if (e && e.preventDefault) { e.preventDefault(); }
         setPage(e.target.dataset.page)
        };

let limitBrendsOfPage = parseInt(page*6);
let beginBrendsOfPage = limitBrendsOfPage - 6;

    return (
        <div className={classes.brendWrap}>
            <div className={classes.brendTitle}>
                <p>Наши бренды</p>
            </div>

            <div>
                {brendsArr?.slice(beginBrendsOfPage, limitBrendsOfPage).map((showBrends) => (
                //   <div className={classes.brendContainerPic}>
                    <img  className={classes.brendContainerPic} src={showBrends} alt="" />
                //   </div>

                )) }
                <button onPageClick={onPageClick}>+</button>
                <button onPageClick={onPageClick}>-</button>
            </div>
        </div>
    );
};