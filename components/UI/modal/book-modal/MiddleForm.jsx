import styles from "./MiddleForm.module.css";
import commonStyles from "./CommonBookModal.module.css";
import Button from "../../elements/Button";
import { useState } from "react/cjs/react.development";
import { COMPLETED, READING, TO_READ } from "../../../layout/Constants";
const MiddleForm = (props) => {
  let [type, setType] = useState(props.type);

  const toggleButton = (readingType) => {
    setType(readingType);
  };
  return (
    <div className={styles.middle}>
      <div className={styles.top_buttons}>
        <Button buttonType="delete">Delete</Button>
        <Button buttonType="save">Save</Button>
      </div>
      <div className={styles.status}>
        <Button
          active={type === READING}
          onClickHandler={() => toggleButton(READING)}
        >
          {READING}
        </Button>
        <Button
          active={type === TO_READ}
          onClickHandler={() => toggleButton(TO_READ)}
        >
          {TO_READ.replaceAll("_", " ")}
        </Button>
        <Button
          active={type === COMPLETED}
          onClickHandler={() => toggleButton(COMPLETED)}
        >
          {COMPLETED}
        </Button>
      </div>
      <div className={styles.page_no}>
        <span className={commonStyles.bottom_title}>Current Page No:</span>
        <span>
          <input
            className={styles.input_button}
            type="number"
            id="pageNo"
            name="pageNo"
          />
          <span className={styles.divider_style}>/ 700</span>
        </span>
      </div>
      <div className={styles.start_date}>
        <span className={commonStyles.bottom_title}>Date Started:</span>
        <span>
          <input type="date" id="startDate" name="startDate" />
        </span>
      </div>
      <div className={styles.end_date}>
        <span className={commonStyles.bottom_title}>Date Completed: </span>
        <span>
          <input type="date" id="endDate" name="endDate" />
        </span>
      </div>
    </div>
  );
};

export default MiddleForm;
