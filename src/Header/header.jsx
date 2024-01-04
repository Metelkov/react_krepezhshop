import React from "react";
import classes from "../Header/styles.module.css"


export const Header = () => {
    return (
        <div className={classes.headWrapper}>
            <div className={classes.headLogo}>
                <div className={classes.headLogoPic}></div>
                <div className={classes.headLogoName}>Крепеж</div>
            </div>
            <div className={classes.headCart}>
            </div>
            <div className={classes.headContentRight}>
              <div className={classes.headContentRightMenu}>
              search pay info
              </div>
              <div className={classes.headContentRightPhone}>
              tel
              </div>
            </div>
        </div>

    )
}