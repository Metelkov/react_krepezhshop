// import { ReactNode } from "react";
import { PageWrapper } from '../../PageWrapper/pagewrapper';
import { Outlet } from "react-router-dom";
import classes from "./styles.module.css";

export const Root =() => {
    // return <PageWrapper> {children} </PageWrapper>
    return <PageWrapper  className={classes.pagewrapper}> <Outlet/> </PageWrapper>
};