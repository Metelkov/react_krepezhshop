import React from "react";
import classes from "../HeaderMenu/styles.module.css";


export const HeaderMenu = () => {
  return (
    <div className={classes.headerMenu}>
      <div className={` ${classes.headerMenuAbout} ${classes.headerMenuLink}`}>
        <p><a href="#">о компании</a></p>
      </div>
      <div className={` ${classes.headerMenuPrice} ${classes.headerMenuLink}`}>
        <p><a href="#">прайс-лист</a></p>
      </div>
      <div className={` ${classes.headerMenuPay} ${classes.headerMenuLink}`}>
        <p><a href="#">оплата</a></p>
      </div>
      <div className={` ${classes.headerMenuDelivery} ${classes.headerMenuLink}`}>
        <p><a href="#">доставка</a></p>
      </div>
      <div className={` ${classes.headerMenuContacts} ${classes.headerMenuLink}`}>
        <p><a href="#">контакты</a></p>
      </div>
      <div className={` ${classes.headerMenuRegister} ${classes.headerMenuLink}`}>
        <p><a href="#">вход </a></p>
        <p className={classes.headerMenuRegisterSpace}>{' / '}</p>
        <p><a href="#">регистрация</a></p>
      </div>
      <div className={classes.headerMenuTel}>
        <div className={classes.headerMenuTelPic}>
        </div>
        <div className={classes.headerMenuTelTel}>
          +7 (111) 222-33-44
        </div>
      </div>
    </div>
  );
}