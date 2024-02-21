import React from "react";
import { Header } from "../Header/header";
import { HeaderMenu } from "../HeaderMenu/headerMenu";
// import { Root } from "../Pages/root/root";
import { Footer } from "../Footer/footer";
import classes from "./styles.module.css"

export const PageWrapper = ({children}) => {
    return (
        <div className={classes.pageWrap}>
        <HeaderMenu />
        <Header />
        {children}
        <Footer />
        </div>
    )
}