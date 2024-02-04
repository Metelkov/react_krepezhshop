import React from "react";
import classes from "../Footer/styles.module.css";

export const Footer = () => {
    return (
        <div className={classes.footerWrapper}>
          <div className={classes.footerBlock}>
            <div className={classes.footerBlockLeftBorder}></div>
            <div className={classes.footerBlockCenter}>
              <div className={classes.footerBlockCenterTitle}>
                  <p>Крепеж-инструмент</p>
              </div>
              <div className={classes.footerBlockCenterContent}>
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
                  <p><a href="#">О нас</a></p>
                  <p><a href="#">Статьи</a></p>
                  <p><a href="#">Бренды</a></p>
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
                  <p><a href="#">Обмен и возврат</a></p>
                  <p><a href="#">Конфиденциальность</a></p>
                  <p><a href="#">Частые вопросы</a></p>
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
                  <p><a href="https://maps.app.goo.gl/Jm3zBhFrJNx5fC4B9">Мы на карте</a></p>
              </div>
            </div>
            <div className={classes.footerBlockRightBorder}></div>
          </div>

        </div>
    )
}
