import { useState } from "react";
import MainBook from "../book/main-book";
import Search from "../search/Search";
import Aside from "./aside/Aside";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styles from "./Layout.module.css";
import Main from "./main/Main";

export const Layout = (props) => {
  return (
    <div className={styles.search_main_container}>
      <Header />
      <Aside />
      <Main />
      <div className={styles.aside_right}>Right</div>
      <Footer />
    </div>
  );
};

export default Layout;