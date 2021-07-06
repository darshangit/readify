import Aside from "./aside/Aside";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styles from "./Layout.module.css";
import RightMenu from "./right-menu/RightMenu";
export const Layout = (props) => {
  return (
    <div className={styles.search_main_container}>
      <Header />
      <Aside />
      <main>{props.children}</main>
      <RightMenu />
      <Footer />
    </div>
  );
};

export default Layout;
