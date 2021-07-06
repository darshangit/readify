import styles from "./TopRight.module.css";
import commonStyles from "./CommonBookModal.module.css";

const TopRight = (props) => {
  const volumeInfo = props.fetchedBook?.volumeInfo || {};

  return (
    <div className={styles.top_right}>
      <span className={commonStyles.title}>{volumeInfo.title}</span>
      <span className={commonStyles.author}>
        {volumeInfo.authors?.join(", ") || "NA"}
      </span>
      <div
        className={commonStyles.wrap_content}
        dangerouslySetInnerHTML={{
          __html: `${volumeInfo.description || "NA"}`,
        }}
      ></div>
    </div>
  );
};

export default TopRight;
