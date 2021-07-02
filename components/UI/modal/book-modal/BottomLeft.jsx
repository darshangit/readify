import styles from "./BottomLeft.module.css";
import commonStyles from "./CommonBookModal.module.css";

const BottomLeft = (props) => {
  return (
    <div className={`${styles.bottom_left} ${styles.wrap_bottom_content}`}>
      <div className={styles.bottom_inner_left}>
        <div>
          <p className={commonStyles.bottom_title}>Total Pages</p>
          <p className={commonStyles.bottom_text}>
            {props.currentBook?.volumeInfo?.pageCount || "NA"}
          </p>
        </div>
        <div>
          <p className={commonStyles.bottom_title}>Average Rating</p>
          <p className={commonStyles.bottom_text}>
            {props.currentBook?.volumeInfo?.averageRating || "NA"}
          </p>
        </div>
      </div>
      <div>
        <p className={commonStyles.bottom_title}>Categories</p>
        <p className={commonStyles.bottom_text}>
          {props.currentBook?.volumeInfo?.categories?.join(", ") || "NA"}
        </p>
      </div>
    </div>
  );
};

export default BottomLeft;
