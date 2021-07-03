import styles from "./MiddleForm.module.css";
import commonStyles from "./CommonBookModal.module.css";
import Button from "../../elements/Button";
const MiddleForm = () => {
  return (
    <div className={styles.middle}>
      <div className={styles.top_buttons}>
        <Button buttonType="delete">Delete</Button>
        <Button buttonType="save">Save</Button>
      </div>
      <div className={styles.status}>
        <Button>Reading</Button>
        <Button>To Read</Button>
        <Button>Completed</Button>
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
