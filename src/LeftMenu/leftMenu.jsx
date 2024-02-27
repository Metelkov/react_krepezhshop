import React from "react";
import classes from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const LeftMenu = () => {
    return <div className={classes.leftMenuWrap}>
              <div className={classes.leftMenuBlock}>
                <div className={classes.leftMenuToMainWrap}>
                    <div className={classes.leftMenuToMainLink}>
                        <NavLink to="/">на главную</NavLink>
                    </div>
                </div>
                <div className={classes.leftMenuFasterer}>
                        <p>крепеж</p>
                </div>
                <div className={classes.leftMenuFastenerWrapp}>
                  <ul className={classes.leftMenuFastenerAnchor}>
                      <li className={classes.leftMenuFastenerAnchorWrap}><span>Анкера</span>
                          <ul>
                          <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li>
                          <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера нержавейка</NavLink>
                          </li>
                          </ul>
                      </li>
                  </ul>



                  <ul className={classes.leftMenuFastenerBolt}>
                      <li className={classes.leftMenuFastenerBoltWrap}><span>Болты</span>
                          <ul>
                            <li>
                              <NavLink to='/about'>Болты рым</NavLink>
                            </li>
                            <li>
                              <NavLink to='/about'>Болты обычные</NavLink>
                            </li>
                            <li>
                              <NavLink to='/about'>Болты круглые</NavLink>
                            </li>
                          </ul>
                      </li>
                  </ul>





                  <ul className={classes.leftMenuFastenerMenuMainList}>

                    <li>Винты</li>
                        <ul>
                          <li>Винты под отвертку</li>
                          <li>Винты потайные</li>
                          <li>Винты торекс</li>
                        </ul>
                    <li>Гайки</li>
                        <ul>
                          <li>Гайки с нейлоном</li>
                          <li>Гайки увеличенные</li>
                          <li>Гайки простые</li>
                        </ul>
                  </ul>
                </div>
                <div className={classes.leftMenuTool}>
                        <p>инструмент</p>
                </div>
                <div className={classes.leftMenuToolMenu}>
                <ul>
                    <li>Буры</li>
                        <ul>
                          <li>Буры из Германии</li>
                          <li>Буры из Китая</li>
                          <li>Буры из России</li>
                        </ul>
                    <li>Сверла</li>
                        <ul>
                          <li>Сверла по дереву</li>
                          <li>Сверла по металлу</li>
                          <li>Сверла с покрытием</li>
                        </ul>
                    <li>Отвертки</li>
                        <ul>
                          <li>Отвертки длинные</li>
                          <li>Отвертки короткие</li>
                          <li>Отвертки в наборе</li>
                        </ul>
                    <li>Гаечные ключи</li>
                        <ul>
                          <li>Гаечные ключи накидные</li>
                          <li>Гаечные ключи рожковые</li>
                          <li>Гаечные ключи разводные</li>
                        </ul>
                  </ul>
                </div>
              </div>
            </div>
}