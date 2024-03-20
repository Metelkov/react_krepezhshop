import React from "react";
import { Header } from "../Header/header";
import { HeaderMenu } from "../HeaderMenu/headerMenu";
import { Footer } from "../Footer/footer";
import { LeftMenu } from "../LeftMenu/leftMenu";
import classes from "./styles.module.css";

export const PageWrapper = ({ children }) => {
  return (
    <div className={classes.pageWrap}>
      <HeaderMenu />
      <Header />
      <div className={classes.leftMenuAndChildWrap}>
        <LeftMenu />
        <div className={classes.ChildWrap}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
