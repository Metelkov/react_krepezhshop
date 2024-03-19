import React from "react";
import classes from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../router/routes";
import { MenuItem } from "./menuitem";

export const LeftMenu = () => {
  return (
    <div className={classes.leftMenuWrap}>
      <div className={classes.leftMenuBlock}>
        <NavLink className={classes.leftMenuToMainWrap} to="/">
          <div className={classes.leftMenuToMainWrap}>на главную</div>
        </NavLink>

        <div className={classes.leftMenuFasterer}>
          <p>крепеж</p>
        </div>

        <div className={classes.leftMenuFastenerMenu}>
          <MenuItem
            title="Болты"
            items={[
              { label: "Болты рым", to: `${ROUTES.bolts}?type=rym` },
              { label: "Болты обычные", to: `${ROUTES.bolts}?type=common` },
              { label: "Болты torx", to: `${ROUTES.bolts}?type=torx` },
            ]}
          />

          <MenuItem
            title="Анкера"
            items={[
              {
                label: "Анкер из нержавейки",
                to: `${ROUTES.anckers}?type=nerzh`,
              },
              {
                label: "Анкер оцинкованный",
                to: `${ROUTES.anckers}?type=zink`,
              },
            ]}
          />

          <MenuItem
            title="Винты"
            items={[
              {
                label: "Винты под отвертку",
                to: `${ROUTES.vints}?type=otvertk`,
              },
              { label: "Винты потайные", to: `${ROUTES.vints}?type=potay` },
              { label: "Винты торекс", to: `${ROUTES.vints}?type=torx` },
            ]}
          />

          <MenuItem
            title="Гайки"
            items={[
              { label: "Гайки с нейлоном", to: "/nuts?type=neylon" },
              { label: "Гайки нерж сталь", to: "/nuts?type=nerzh" },
              { label: "Гайки простые", to: "/nuts?type=prost" },
            ]}
          />
        </div>

        <div className={classes.leftMenuTool}>
          <p>инструмент</p>
        </div>

        <div className={classes.leftMenuToolMenu}>
          <MenuItem
            title="Буры"
            items={[
              { label: "Буры из Германии", to: `${ROUTES.burs}?type=gurger` },
              { label: "Буры из Китая", to: `${ROUTES.burs}?type=burkit` },
              { label: "Буры из России", to: `${ROUTES.burs}?type=burrus` },
            ]}
          />

          <MenuItem
            title="Сверла"
            items={[
              {
                label: "Сверла по дереву",
                to: `${ROUTES.sverls}?type=sverlderev`,
              },
              {
                label: "Сверла по металлу",
                to: `${ROUTES.sverls}?type=sverlmetall`,
              },
            ]}
          />

          <MenuItem
            title="Отвертки"
            items={[
              { label: "Отвертки Ph", to: "/otvertki?type=otvertph" },
              { label: "Отвертки простые", to: "/otvertki?type=otvertsimpl" },
              { label: "Отвертки в наборе", to: "/otvertki?type=otvertnabor" },
            ]}
          />

          {/* <MenuItem
            title="Гаечные ключи"
            items={[
              { label: "Гаечные ключи накидные", to: "/sverls?type=1" },
              { label: "Гаечные ключи рожковые", to: "/sverls?type=2" },
              { label: "Гаечные ключи разводные", to: "/sverts?type=3" },
            ]}
          /> */}
        </div>
      </div>
    </div>
  );
};
