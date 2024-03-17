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
              { label: "Анкер из нержавейки", to: `${ROUTES.anckers}?type=1` },
              { label: "Анкер оцинкованный", to: `${ROUTES.anckers}?type=2` },
            ]}
          />

          <MenuItem
            title="Винты"
            items={[
              { label: "Винты под отвертку", to: `${ROUTES.vints}?type=1` },
              { label: "Винты потайные", to: `${ROUTES.vints}?type=2` },
              { label: "Винты торекс", to: `${ROUTES.vints}?type=3` },
            ]}
          />

          <MenuItem
            title="Гайки"
            items={[
              { label: "Гайки с нейлоном", to: "/nuts?type=1" },
              { label: "Гайки увеличенные", to: "/nuts?type=2" },
              { label: "Гайки простые", to: "/nuts?type=3" },
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
              { label: "Буры из Германии", to: `${ROUTES.burs}?type=1` },
              { label: "Буры из Китая", to: `${ROUTES.burs}?type=2` },
              { label: "Буры из России", to: `${ROUTES.burs}?type=3` },
            ]}
          />

          <MenuItem
            title="Сверла"
            items={[
              { label: "Сверла по дереву", to: `${ROUTES.gaechs}?type=1` },
              { label: "Сверла по металлу", to: `${ROUTES.gaechs}?type=2` },
              { label: "Сверла с покрытием", to: `${ROUTES.gaechs}?type=3` },
            ]}
          />

          <MenuItem
            title="Отвертки"
            items={[
              { label: "Отвертки длинные", to: "/otvertks?type=1" },
              { label: "Сотвертки короткие", to: "/otvertks?type=2" },
              { label: "Отвертки в наборе", to: "/otvertks?type=3" },
            ]}
          />

          <MenuItem
            title="Гаечные ключи"
            items={[
              { label: "Гаечные ключи накидные", to: "/sverls?type=1" },
              { label: "Гаечные ключи рожковые", to: "/sverls?type=2" },
              { label: "Гаечные ключи разводные", to: "/sverts?type=3" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
