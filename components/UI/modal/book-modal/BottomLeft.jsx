import styles from "./BottomLeft.module.css";
import commonStyles from "./CommonBookModal.module.css";

const BottomLeft = (props) => {
  const volumeInfo = props.fetchedBook?.volumeInfo || {};

  return (
    <div
      className={`${styles.bottom_left} ${commonStyles.wrap_bottom_content}`}
    >
      <div className={styles.bottom_inner_left}>
        <div>
          <p className={commonStyles.bottom_title}>Total Pages</p>
          <p className={commonStyles.bottom_text}>
            {volumeInfo.pageCount || "NA"}
          </p>
        </div>
        <div>
          <p className={commonStyles.bottom_title}>Average Rating</p>
          <p className={commonStyles.bottom_text}>
            {volumeInfo.averageRating || "NA"}
          </p>
        </div>
      </div>
      <div>
        <p className={commonStyles.bottom_title}>Categories</p>
        <p className={commonStyles.bottom_text}>
          {volumeInfo.categories?.join(", ") || "NA"}
        </p>
      </div>
    </div>
  );
};

export default BottomLeft;
