import React from "react";
import classes from "../HeaderMenu/styles.module.css";
import { NavLink } from "react-router-dom";
// import { price } from "../Pages/price/price.odt"


export const HeaderMenu = () => {
  return (
    <div className={classes.headerMenu}>
      <div className={` ${classes.headerMenuAbout} ${classes.headerMenuLink}`}>
        {/* <NavLink target="_blank" to="/about">о компании</NavLink> */}
        <NavLink to="/about">о компании</NavLink>
      </div>
      <div className={` ${classes.headerMenuPrice} ${classes.headerMenuLink}`}>
        <p><a href="">прайс-лист</a></p>
        <a id="myLink" onclick="alert('link click');">LINK 1</a>
        {/* <Link to="/price">прайс-лист</Link> */}
      </div>
      <div className={` ${classes.headerMenuPay} ${classes.headerMenuLink}`}>
        {/* <p><a href="#">оплата</a></p> */}
        <NavLink to="/payment">оплата</NavLink>
      </div>
      <div className={` ${classes.headerMenuDelivery} ${classes.headerMenuLink}`}>
        {/* <p><a href="#">доставка</a></p> */}
        <NavLink to='/stub'>доставка</NavLink>
      </div>
      <div className={` ${classes.headerMenuContacts} ${classes.headerMenuLink}`}>
        {/* <p><a href="#">контакты</a></p> */}
        <NavLink to='/Contacts'>контакты</NavLink>
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