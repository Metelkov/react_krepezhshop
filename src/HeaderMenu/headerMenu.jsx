import React from "react";
import classes from "../HeaderMenu/styles.module.css"


export const HeaderMenu = () => {
    return (
        <div className={classes.headerMenu}>
            <div className={classes.headerMenuAbout}>
              <p><a href="#">о компании</a></p>
            </div>
            <div className={classes.headerMenuPrice}>
              <p><a href="#">прайс-лист</a></p>
            </div>
            <div className={classes.headerMenuPay}>
              <p><a href="#">оплата</a></p>
            </div>
            <div className={classes.headerMenuDelivery}>
              <p><a href="#">доставка</a></p>
            </div>
            <div className={classes.headerMenuContacts}>
              <p><a href="#">контакты</a></p>
            </div>
            <div className={classes.headerMenuRegister}>
              <p><a href="#">вход/регистрация</a></p>
            </div>
            <div className={classes.headerMenuTel}>
                <div className={classes.headerMenuTelPic}>
                </div>
                <div className={classes.headerMenuTelTel}>
                  +7 (111) 222-33-44
                </div>
            </div>
        </div>

    )
}