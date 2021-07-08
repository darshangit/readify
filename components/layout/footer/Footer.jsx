import styles from "./Footer.module.css";
const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <p className={styles.name}>© Dash</p>
      <p className={styles.year}>2020</p>
    </div>
  );
};

export default Footer;
