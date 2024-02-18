import React from "react";
import classes from "./styles.module.css";


export const Contacts = () => {
    return (<div className={classes.contactsWrapper}>
        <div className={classes.contactsTitle}>
           <h1>Наши контакты</h1>
        </div>
        <div className={classes.contactsAddress}>
            <p>Крепеж-инструмент</p>
            <p>Нижний Новгород, ул. Дьяконова, д. 30</p>
            <p>Пн-Сб 8:30-19:00, Вс 8:30-17:00</p>
            <p>+7 (831) 218-18-08</p>
        </div>
        <div className={classes.contactsMap}>
            <p><a href="https://maps.app.goo.gl/Jm3zBhFrJNx5fC4B9">Мы на карте</a></p>

        </div>
    </div>
    )
};