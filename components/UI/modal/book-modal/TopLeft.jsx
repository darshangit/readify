import styles from "./TopLeft.module.css";
import commonStyles from "./CommonBookModal.module.css";

const TopLeft = (props) => {
  return (
    <div className={styles.top_left}>
      <img
        src={props.fetchedBook?.volumeInfo?.imageLinks?.thumbnail || "404.png"}
        alt="Image"
      />
    </div>
  );
};

export default TopLeft;
