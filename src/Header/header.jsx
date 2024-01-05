import React from "react";
import classes from "../Header/styles.module.css"


export const Header = () => {
    return (
        <div className={classes.headWrapper}>
            <div className={classes.headLogo}>
                <div className={classes.headLogoPic}></div>
                <div className={classes.headLogoName}>Крепеж-инструмент</div>
            </div>


            <div className={classes.headContentRight}>
                <div className={classes.headContentRightMenuSearchPic}>
                </div>
                <div className={classes.headContentRightMenuSearch}>
                  поиск
                </div>
            </div>


            <div className={classes.headCart}>
            </div>


        </div>

    )
}