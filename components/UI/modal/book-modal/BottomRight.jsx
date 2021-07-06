import styles from "./BottomRight.module.css";
import commonStyles from "./CommonBookModal.module.css";

const BottomRight = (props) => {
  const volumeInfo = props.fetchedBook?.volumeInfo || {};

  return (
    <div
      className={`${styles.bottom_right} ${commonStyles.wrap_bottom_content}`}
    >
      <div className={styles.inner_bottom_right}>
        <div>
          <p className={commonStyles.bottom_title}>Publisher</p>
          <p className={`${commonStyles.bottom_text}`}>
            {volumeInfo.publisher || "NA"}
          </p>
        </div>
        <div>
          <p className={commonStyles.bottom_title}>Published Date</p>
          <p className={commonStyles.bottom_text}>
            {volumeInfo.publishedDate || "NA"}
          </p>
        </div>
      </div>
      <div>
        <p className={commonStyles.bottom_title}>ISBN</p>
        <span className={commonStyles.bottom_text}>
          {volumeInfo.industryIdentifiers?.map((item) => {
            return (
              <span className={commonStyles.bottom_text}>
                {item.type} :{" "}
                <span>
                  {item.identifier} <br />
                </span>
              </span>
            );
          }) || "NA"}
        </span>
      </div>
    </div>
  );
};

export default BottomRight;
