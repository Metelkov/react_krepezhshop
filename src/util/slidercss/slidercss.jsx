import React from "react";
import classes from "./steles.module.css";

import gayka2 from "../sliderPic/gayka2.jpg";
import gayka3 from "../sliderPic/gayka3.jpg";
import gvozd from "../sliderPic/gvozd.jpg";
import key from "../sliderPic/key.jpg";
import vint from "../sliderPic/vint.jpg";

export const SliderCss = () => {
  return (
    <div className={classes.imageWrap}>
      <div className={classes.slider}>
        <img className={classes.imgSlid} src={gayka2} alt="" />
        <img className={classes.imgSlid} src={gvozd} alt="" />
        <img className={classes.imgSlid} src={gayka3} alt="" />
        <img className={classes.imgSlid} src={key} alt="" />
        <img className={classes.imgSlid} src={vint} alt="" />
      </div>
    </div>
  );
};
