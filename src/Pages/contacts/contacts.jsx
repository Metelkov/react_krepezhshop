import React from "react";
import classes from "./styles.module.css";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const Contacts = () => {
    return (<div className={classes.contactsWrapper}>
        <div className={classes.contactsTitle}>
           <h1>Наши контакты</h1>
        </div>
        <div className={classes.contactsCenterWrap}>
        <div className={classes.contactsAddress}>
            <p>Крепеж-инструмент</p>
            <p>Нижний Новгород, ул. Дьяконова, д. 30</p>
            <p>Пн-Сб 8:30-19:00, Вс 8:30-17:00</p>
            <p>+7 (831) 218-18-08</p>
        </div>
        <div className={classes.contactsMap}>
            <YMaps>
               <Map 
                  width="100%"
                  height="100%"
                  defaultState={{ 
                    center: [56.265447, 43.889700], 
                    zoom: 18, 
                  }}>
                 <Placemark geometry={[56.265447, 43.889700]}></Placemark>
               </Map>
         </YMaps>
        </div>
        </div>
    </div>
    )
};