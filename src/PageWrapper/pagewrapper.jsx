import React from "react";
import { Header } from "../Header/header";
import { HeaderMenu } from "../HeaderMenu/headerMenu";
import { Root } from "../Pages/root/root";
import { Footer } from "../Footer/footer";

export const PageWrapper = () => {
    return (
        <>
        <HeaderMenu />
        <Header />
        <Root />
        <Footer />
        </>
    )
}