// import { ReactNode } from "react";
import { PageWrapper } from '../../PageWrapper/pagewrapper';
import { Outlet } from "react-router-dom";

export const Root =() => {
    // return <PageWrapper> {children} </PageWrapper>
    return <PageWrapper> <Outlet/> </PageWrapper>
}