import styles from "./MiddleForm.module.css";
import commonStyles from "./CommonBookModal.module.css";
import Button from "../../elements/Button";
import { COMPLETED, READING, TO_READ } from "../../../layout/Constants";
import { useState } from "react";

const MiddleForm = (props) => {
  let currentBook = props.currentBook;
  let fetchedBook = props.fetchedBook;

  let [formState, setFormState] = useState({
    readingType: currentBook.type || props.type,
    pageNo: currentBook.pageNo,
    startDate: currentBook.startDate,
    endDate: currentBook.endDate,
  });

  const submitHandler = (actionType) => {
    if (actionType === "EDIT") {
      currentBook.type = formState.readingType;
      currentBook.pageNo = formState.pageNo || 0;
      currentBook.startDate = formState.startDate;
      currentBook.endDate = formState.endDate;
      props.formAction(actionType, currentBook);
    } else {
      props.formAction(actionType, currentBook);
    }
  };

  const toggleButton = (readingType) => {
    setFormState({
      ...formState,
      readingType,
    });
  };

  const handlerInputChange = (event) => {
    const targetValue = event.target.value;
    const targetName = event.target.name;
    setFormState({
      ...formState,
      [targetName]: targetValue,
    });
  };

  return (
    <form className={styles.middle}>
      <div className={styles.top_buttons}>
        <Button
          buttonType="delete"
          onClickHandler={() => {
            submitHandler("DELETE");
          }}
        >
          Delete
        </Button>
        <Button
          buttonType="save"
          onClickHandler={() => {
            submitHandler("EDIT");
          }}
        >
          Save
        </Button>
      </div>
      <div className={styles.status}>
        <Button
          active={formState.readingType === READING}
          onClickHandler={() => toggleButton(READING)}
        >
          {READING}
        </Button>
        <Button
          active={formState.readingType === TO_READ}
          onClickHandler={() => toggleButton(TO_READ)}
        >
          {TO_READ.replaceAll("_", " ")}
        </Button>
        <Button
          active={formState.readingType === COMPLETED}
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
            value={formState.pageNo}
            onChange={handlerInputChange}
          />
          <span className={styles.divider_style}>
            / {fetchedBook?.volumeInfo?.pageCount || 'NA'}
          </span>
        </span>
      </div>
      <div className={styles.start_date}>
        <span className={commonStyles.bottom_title}>Date Started:</span>
        <span>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formState.startDate}
            onChange={handlerInputChange}
          />
        </span>
      </div>
      <div className={styles.end_date}>
        <span className={commonStyles.bottom_title}>Date Completed: </span>
        <span>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formState.endDate}
            onChange={handlerInputChange}
          />
        </span>
      </div>
    </form>
  );
};

export default MiddleForm;
