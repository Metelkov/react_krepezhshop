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
                      <li className={classes.leftMenuFastenerWrap}><span>Анкера</span>
                          <ul>
                          {/* <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <p><NavLink to='/about'>Анкера нержавейка</NavLink></p>
                            <p><NavLink to='/about'>Анкера оцинкованные</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  <ul className={classes.leftMenuFastenerAnchor}>
                      <li className={classes.leftMenuFastenerWrap}><span>Болты</span>
                          <ul>
                          {/* <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <p><NavLink to='/about'>Болты рым</NavLink></p>
                            <p><NavLink to='/about'>Болты обычные</NavLink></p>
                            <p><NavLink to='/about'>Болты круглые</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  <ul className={classes.leftMenuFastenerAnchor}>
                      <li className={classes.leftMenuFastenerWrap}><span>Винты</span>
                          <ul>
                          {/* <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <p><NavLink to='/about'>Винты под отвертку</NavLink></p>
                            <p><NavLink to='/about'>Винты потайные</NavLink></p>
                            <p><NavLink to='/about'>Винты торекс</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>


                  <ul className={classes.leftMenuFastenerAnchor}>
                      <li className={classes.leftMenuFastenerWrap}><span>Гайки</span>
                          <ul>
                          {/* <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <p><NavLink to='/about'>Гайки с нейлоном</NavLink></p>
                            <p><NavLink to='/about'>Гайки увеличенные</NavLink></p>
                            <p><NavLink to='/about'>Гайки простые</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  
                </div>
                <div className={classes.leftMenuTool}>
                        <p>инструмент</p>
                </div>

                
                <div className={classes.leftMenuToolMenu}>

                <ul className={classes.leftMenuFastenerAnchor}>
                      <li className={classes.leftMenuFastenerWrap}><span>Буры</span>
                          <ul>
                          {/* <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <p><NavLink to='/about'>Буры из Германии</NavLink></p>
                            <p><NavLink to='/about'>Буры из Китая</NavLink></p>
                            <p><NavLink to='/about'>Буры из России</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  <ul className={classes.leftMenuFastenerAnchor}>
                      <li className={classes.leftMenuFastenerWrap}><span>Сверла</span>
                          <ul>
                          {/* <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <p><NavLink to='/about'>Сверла по дереву</NavLink></p>
                            <p><NavLink to='/about'>Сверла по металлу</NavLink></p>
                            <p><NavLink to='/about'>Сверла с покрытием</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  <ul className={classes.leftMenuFastenerAnchor}>
                      <li className={classes.leftMenuFastenerWrap}><span>Отвертки</span>
                          <ul>
                          {/* <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <p><NavLink to='/about'>Отвертки длинные</NavLink></p>
                            <p><NavLink to='/about'>СОтвертки короткие</NavLink></p>
                            <p><NavLink to='/about'>Отвертки в наборе</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                  <ul className={classes.leftMenuFastenerAnchor}>
                      <li className={classes.leftMenuFastenerWrap}><span>Гаечные ключи</span>
                          <ul>
                          {/* <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <NavLink to='/about'>Анкера оцинкованные</NavLink>
                          </li> */}
                          <li className={classes.leftMenuFastenerMenuSrcondListLi}>
                            <p><NavLink to='/about'>Гаечные ключи накидные</NavLink></p>
                            <p><NavLink to='/about'>Гаечные ключи рожковые</NavLink></p>
                            <p><NavLink to='/about'>Гаечные ключи разводные</NavLink></p>
                          </li>
                          </ul>
                      </li>
                  </ul>

                 
                </div>
              </div>
           </div>
}