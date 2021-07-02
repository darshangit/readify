import styles from "./TopRight.module.css";
import commonStyles from "./CommonBookModal.module.css";

const TopRight = (props) => {
  return (
    <div className={styles.top_right}>
      <span className={commonStyles.title}>
        {props.currentBook?.volumeInfo?.title}
      </span>
      <span className={commonStyles.author}>
        {props.currentBook?.volumeInfo?.authors?.join(", ") || "NA"}
      </span>
      <div
        className={commonStyles.wrap_content}
        dangerouslySetInnerHTML={{
          __html: `${props.currentBook?.volumeInfo?.description || "NA"}`,
        }}
      ></div>
    </div>
  );
};

export default TopRight;
