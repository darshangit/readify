import styles from "./Aside.module.css";
const Aside = (props) => {
  return (
    <div className={styles.aside_left}>
      <h3>Menu</h3>
      <p>Discover</p>
      <p>Search</p>
      <p>Library</p>
    </div>
  );
};

export default Aside;
