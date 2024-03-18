import React from "react";
import classes from "../Main/styles.module.css";
import { Loader } from "../../util/loader/loader";
import { Slider2 } from "../../util/slider2/slider2";
import { SliderCss } from "../../util/slidercss/slidercss";

export const MainPage = () => {
  return (
    <div className={classes.mainPageWrapper}>
      <div className={classes.sliderSpot}>
        <SliderCss />
        {/* <Loader /> */}
      </div>
      <div className={classes.cardPlace}>
        <div className={classes.cardPlaceLeft}></div>
        <div className={classes.cardPlaceCenter}></div>
        <div className={classes.cardPlaceRight}></div>
      </div>
      <div className={classes.newGoods}>
        <div className={classes.newGoodsLeft}></div>
        <div className={classes.newGoodsCenter}></div>
        <div className={classes.newGoodsRight}></div>
      </div>
    </div>
  );
};
