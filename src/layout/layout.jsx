import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";
import { Header } from "../Header/header";
import { HeaderMenu } from "../HeaderMenu/headerMenu";
import { Footer } from "../Footer/footer";

export const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.root}>
        <HeaderMenu />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
