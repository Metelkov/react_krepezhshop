import React from "react";
import classes from "../Header/styles.module.css";

export const Header = () => {
  return (
    <div className={classes.headWrapper}>
      <div className={classes.headLogo}>
        <div className={classes.headLogoPic}></div>
        <div className={classes.headLogoName}>Крепеж-инструмент</div>
      </div>

      <div className={classes.headContentSearch}>
        <div className={classes.headContentSearchInputBox}>
          <input
            type="search"
            name=""
            id=""
            className={classes.headContentSearchInputLabel}
          />
        </div>
        <div className={classes.headContentSearchButtonBox}>
          <button>поиск</button>
        </div>
      </div>
      <div className={classes.headCart}></div>
    </div>
  );
};
