import styles from "./MiddleForm.module.css";
import commonStyles from "./CommonBookModal.module.css";
const MiddleForm = () => {
  return (
    <div className={styles.middle}>
      <div className={styles.top_buttons}>
        <button>Delete</button> <button>Save</button>
      </div>
      <div className={styles.status}>
        <button className={styles.button}>Reading</button>{" "}
        <button className={styles.button}>To Read</button>{" "}
        <button className={styles.button}>Completed</button>
      </div>
      <div className={styles.page_no}>
        <span className={commonStyles.bottom_title}>Current Page No:</span>{" "}
        <span>20 / 700</span>
      </div>
      <div className={styles.start_date}>
        <span className={commonStyles.bottom_title}>Date Started:</span>
        <span>Date Widget</span>
      </div>
      <div className={styles.end_date}>
        <span className={commonStyles.bottom_title}>Date Completed: </span>
        <span>Date Widget</span>
      </div>
    </div>
  );
};

export default MiddleForm;
