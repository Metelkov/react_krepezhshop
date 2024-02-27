import React from "react";
import classes from "../Footer/styles.module.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <div className={classes.footerWrapper}>
          <div className={classes.footerBlock}>
            <div className={classes.footerBlockLeftBorder}></div>
            <div className={classes.footerBlockCenter}>
              <div className={classes.footerBlockCenterTitle}>
                  <p>Крепеж-инструмент</p>
              </div>
              <div className={`${classes.footerBlockCenterContent}`}>
                  <p>2024 проект на React</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className={`${classes.footerBlockRightBorder} ${classes.footerBlockRightBorderDrawLine}`}></div>
          </div>

          <div className={classes.footerBlock}>
            <div className={classes.footerBlockLeftBorder}></div>
            <div className={classes.footerBlockCenter}>
              <div className={classes.footerBlockCenterTitle}>
                  <p>О компании</p>
              </div>
              <div className={`${classes.footerBlockCenterContent} ${classes.footerBlockLink}`}>
                  <p><NavLink to='/about'>О нас</NavLink></p>
                  <p><NavLink to='/stub'>Lorem ipsum</NavLink></p>
                  <p><NavLink to='/brends'>Бренды</NavLink></p>
              </div>
            </div>
            <div className={` ${classes.footerBlockRightBorder} ${classes.footerBlockRightBorderDrawLine}`}></div>
          </div>

          <div className={classes.footerBlock}>
            <div className={classes.footerBlockLeftBorder}></div>
            <div className={classes.footerBlockCenter}>
              <div className={classes.footerBlockCenterTitle}>
                  <p>Покупателям</p>
              </div>
              <div className={` ${classes.footerBlockCenterContent} ${classes.footerBlockLink}`}>
                  <p><NavLink to='/stub'>Обмен и возврат</NavLink></p>
                  <p><NavLink to='/stub'>Конфиденциальность</NavLink></p>
                  <p><NavLink to='/stub'>Частые вопросы</NavLink></p>
              </div>
            </div>
            <div className={` ${classes.footerBlockRightBorder} ${classes.footerBlockRightBorderDrawLine}`}></div>
          </div>

          <div className={classes.footerBlock}>
            <div className={classes.footerBlockLeftBorder}></div>
            <div className={classes.footerBlockCenter}>
              <div className={classes.footerBlockCenterTitle}>
                  <p>Контакты</p>
              </div>
              <div className={` ${classes.footerBlockCenterContent}  ${classes.footerBlockLink}`}>
                  <p>Нижний Новгород, ул. Дьяконова, д. 30</p>
                  <p>Пн-Сб 8:30-19:00, Вс 8:30-17:00</p>
                  <p>+7 (831) 218-18-08</p>
                  <p><a href="https://maps.app.goo.gl/Jm3zBhFrJNx5fC4B9" target="_blank">Мы на карте</a></p>
              </div>
            </div>
            <div className={classes.footerBlockRightBorder}></div>
          </div>

        </div>
    )
}
