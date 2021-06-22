import { useContext, useState } from "react";
import BookContext from "../../../store/book-context";
import styles from "./RightMenu.module.css";

const renderCards = () => {
  let i = 0;
  let cardsList = [];
  while (i <= 10) {
    cardsList.push(
      <div className={styles.single_card}>
        <img src="404.png" />
        <div className={styles.middle_portion}>
          <span className={`${styles.wrap_text} ${styles.title}`}>
            Title of the book is very loong asdn never endsasd asdasdas
          </span>
          <span className={`${styles.wrap_text} ${styles.author}`}>
            Authors name is also super duper longggggggg
          </span>
        </div>
        <div className={styles.right_portion}>
          <p>50%</p>
        </div>
      </div>
    );
    i++;
  }

  return cardsList;
};

const RightMenu = (props) => {
  let [type, setType] = useState("Reading");
  const bookContext = useContext(BookContext);

  const headingClickedHandler = (type) => {
    setType(type);
    bookContext.getBooks(type);
  };

  return (
    <div className={styles.aside_right}>
      <h3>Your List</h3>
      <div className={styles.card}>
        <div className={styles.card_heading}>
          <h6
            onClick={headingClickedHandler.bind(null, "Reading")}
            className={type === "Reading" ? styles.card_heading_decoration : ""}
          >
            Reading
          </h6>
          <h6
            onClick={headingClickedHandler.bind(null, "To_Read")}
            className={type === "To_Read" ? styles.card_heading_decoration : ""}
          >
            To Read
          </h6>
          <h6
            onClick={headingClickedHandler.bind(null, "Completed")}
            className={
              type === "Completed" ? styles.card_heading_decoration : ""
            }
          >
            Completed
          </h6>
        </div>
        {renderCards()}
      </div>
    </div>
  );
};

export default RightMenu;
