import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.account}>Account</div>
    </div>
  );
};

export default Header;
