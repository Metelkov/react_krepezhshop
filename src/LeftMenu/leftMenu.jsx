import React from "react";
import classes from "./styles.module.css";
import { NavLink } from "react-router-dom";

import { MenuItem } from "./menuitem";

export const LeftMenu = () => {
    return <div className={classes.leftMenuWrap}>
              <div className={classes.leftMenuBlock}>
                        <NavLink className={classes.leftMenuToMainWrap}  to="/">
                          <div className={classes.leftMenuToMainWrap}>на главную</div>
                        </NavLink>

                <div className={classes.leftMenuFasterer}>
                        <p>крепеж</p>
                </div>


                 <div className={classes.leftMenuFastenerMenu}>
                  <MenuItem
                   title="Болты"
                   items={[{label: 'Болты рым', to: '/about'},
                           {label: 'Болты обычные', to: '/about'},
                           {label: 'Болты круглые', to: '/about'},
                   ]}/>

                  <MenuItem
                   title="Болты"
                   items={[{label: 'Болты рым', to: '/about'},
                           {label: 'Болты обычные', to: '/about'},
                           {label: 'Болты круглые', to: '/about'},
                   ]}/>

                  <MenuItem
                   title="Винты"
                   items={[{label: 'Винты под отвертку', to: '/about'},
                           {label: 'Винты потайные', to: '/about'},
                           {label: 'Винты торекс', to: '/about'},
                   ]}/>

                  <MenuItem
                   title="Гайки"
                   items={[{label: 'Гайки с нейлоном', to: '/about'},
                           {label: 'Гайки увеличенные', to: '/about'},
                           {label: 'Гайки простые', to: '/about'},
                   ]}/>
                </div>


                <div className={classes.leftMenuTool}>
                        <p>инструмент</p>
                </div>


                <div className={classes.leftMenuToolMenu}>
                   <MenuItem
                   title="Буры"
                   items={[{label: 'Буры из Германии', to: '/about'},
                           {label: 'Буры из Китая', to: '/about'},
                           {label: 'Буры из России', to: '/about'},
                   ]}/>

                   <MenuItem 
                   title="Сверла"
                   items={[{label: 'Сверла по дереву', to: '/about'},
                           {label: 'Сверла по металлу', to: '/about'},
                           {label: 'Сверла с покрытием', to: '/about'},
                   ]}/>

                   <MenuItem
                   title="Отвертки"
                   items={[{label: 'Отвертки длинные', to: '/about'},
                           {label: 'Сотвертки короткие', to: '/about'},
                           {label: 'Отвертки в наборе', to: '/about'},
                   ]}/>

                   <MenuItem
                   title="Гаечные ключи"
                   items={[{label: 'Гаечные ключи накидные', to: '/about'},
                           {label: 'Гаечные ключи рожковые', to: '/about'},
                           {label: 'Гаечные ключи разводные', to: '/about'},
                   ]}/>
                </div>

              </div>
           </div>
}