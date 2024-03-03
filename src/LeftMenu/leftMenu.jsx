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


                 <div className={classes.lleftMenuWrapp}>
                  <ul className={classes.leftMenuAnchor}>
                      <li className={classes.lleftMenuWrap}>
                          <ul className={classes.leftMenuUlTitle}> <span>Анкера</span>
                          {/* <li className={classes.leftMenuMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuMenuSrcondListLi}>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/anckernerzh'>Анкера нержавейка</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/ankerzink'>Анкера оцинкованные</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  <ul className={classes.leftMenuAnchor}>
                      <li className={classes.lleftMenuWrap}>
                          <ul className={classes.leftMenuUlTitle}> <span>Болты</span>
                          {/* <li className={classes.leftMenuMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuMenuSrcondListLi}>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Болты рым</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Болты обычные</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Болты круглые</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  <ul className={classes.leftMenuAnchor}>
                      <li className={classes.lleftMenuWrap}>
                          <ul className={classes.leftMenuUlTitle}> <span>Винты</span>
                          {/* <li className={classes.leftMenuMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuMenuSrcondListLi}>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Винты под отвертку</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Винты потайные</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Винты торекс</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>


                  <ul className={classes.leftMenuAnchor}>
                      <li className={classes.lleftMenuWrap}>
                          <ul className={classes.leftMenuUlTitle}> <span>Гайки</span>
                          {/* <li className={classes.leftMenuMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuMenuSrcondListLi}>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Гайки с нейлоном</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Гайки увеличенные</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Гайки простые</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>
                </div>

                <div className={classes.leftMenuTool}>
                        <p>инструмент</p>
                </div>

                <div className={classes.leftMenuToolMenu}>
                <ul className={classes.leftMenuAnchor}>
                      <li className={classes.lleftMenuWrap}>
                          <ul className={classes.leftMenuUlTitle}> <span>Буры</span>
                          {/* <li className={classes.leftMenuMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuMenuSrcondListLi}>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Буры из Германии</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Буры из Китая</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Буры из России</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  <ul className={classes.leftMenuAnchor}>
                      <li className={classes.lleftMenuWrap}>
                          <ul className={classes.leftMenuUlTitle}> <span>Сверла</span>
                          {/* <li className={classes.leftMenuMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuMenuSrcondListLi}>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Сверла по дереву</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Сверла по металлу</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Сверла с покрытием</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  <ul className={classes.leftMenuAnchor}>
                      <li className={classes.lleftMenuWrap}>
                          <ul className={classes.leftMenuUlTitle}> <span>Отвертки</span>
                          {/* <li className={classes.leftMenuMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuMenuSrcondListLi}>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Отвертки длинные</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Сотвертки короткие</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Отвертки в наборе</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  <ul className={classes.leftMenuAnchor}>
                      <li className={classes.lleftMenuWrap}>
                          <ul className={classes.leftMenuUlTitle}> <span>Гаечные ключи</span>
                          {/* <li className={classes.leftMenuMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuMenuSrcondListLi}>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Гаечные ключи накидные</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Гаечные ключи рожковые</NavLink></p>
                            <p><NavLink className={classes.leftMenuLinkShift} to='/about'>Гаечные ключи разводные</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                 
                </div>
              </div>
           </div>
}