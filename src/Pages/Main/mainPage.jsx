import React from "react";
import classes from "../Main/styles.module.css";
import { SliderCss } from "../../util/slidercss/slidercss";
import { BrendsToMain } from "../brends/brendsToMain";
import { NavLink } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className={classes.mainPageWrapper}>
      <div className={classes.sliderSpot}>
        <SliderCss />
      </div>
      <div className={classes.cardPlace}>
        <BrendsToMain />
      </div>
      <div className={classes.newGoods}>
        <div className={classes.newGoodsTitle}>
          <p>Новости</p>
        </div>
        <div className={classes.newGoodsWrap}>
          <div className={classes.newGoodsSquare}>
            <NavLink lassName={classes.newGoodsNav} to="/stub">
              <span className={classes.newGoodsContent}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati, quaerat ipsam a maiores nemo deleniti. Ratione, vel
                dolorum inventore quod ipsum nihil consequuntur minima, aliquid
                eaque sed quasi non error excepturi, placeat dolores
                necessitatibus temporibus totam pariatur culpa iure. Dicta
                labore ex quidem vel ab numquam quod impedit velit mollitia.
              </span>
            </NavLink>
          </div>
          <div className={classes.newGoodsSquare}>
            <NavLink lassName={classes.newGoodsNav} to="/stub">
              <span className={classes.newGoodsContent}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, reprehenderit libero architecto nulla ut odio ipsam
                illum nihil fuga molestiae facilis explicabo, dignissimos
                necessitatibus blanditiis adipisci. Laboriosam recusandae minus
                quos itaque, obcaecati nulla sint, dolore quam ratione nihil
                quaerat, autem et architecto laborum.
              </span>
            </NavLink>
          </div>
          <div className={classes.newGoodsSquare}>
            <NavLink lassName={classes.newGoodsNav} to="/stub">
              <span className={classes.newGoodsContent}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus quam facere porro similique nesciunt est ullam dolor
                quis id alias asperiores non veniam incidunt, rem culpa quos
                pariatur. Reiciendis, ab.
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
