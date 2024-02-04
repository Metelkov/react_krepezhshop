import React from "react";
import { Header } from "../Header/header";
import { HeaderMenu } from "../HeaderMenu/headerMenu";
// import { Root } from "../Pages/root/root";
import { Footer } from "../Footer/footer";

export const PageWrapper = ({children}) => {
    return (
        <>
        {/* <div className={styles.root}> */}
        <HeaderMenu />
        <Header />
        {/* <Root /> */}
        {children}
        <Footer />
        {/* </div> */}
        </>
    )
}