import React from "react";
import classes from "../slider2/styles.module.css"
import {Carousel} from "../slider2/carousel"

export const Slider2 = () => {
    return (
        <Carousel>
            <div className={ `${classes.item} ${classes.item1}`}>Item 1</div>
            <div className={ `${classes.item} ${classes.item2}`}>Item 2</div>
            <div className={ `${classes.item} ${classes.item3}`}>Item 3</div>
        </Carousel>
    )
}