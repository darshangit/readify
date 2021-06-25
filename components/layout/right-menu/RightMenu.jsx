import { useContext, useEffect, useState } from "react";
import BookContext from "../../../store/book-context";
import AsideBook from "../../UI/aside-book/AsideBook";
import Modal from "../../UI/modal/Modal";
import styles from "./RightMenu.module.css";

const RightMenu = (props) => {
  let [type, setType] = useState("Reading");
  const [showModal, setShowModal] = useState(false);

  const bookContext = useContext(BookContext);
  const { books } = bookContext;

  const headingClickedHandler = (type) => {
    setType(type);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const cardClickedHandler = () => {
    setShowModal(true);
  };

  const renderCards = () => {
    let i = 0;
    let bookList = [];
    const filteredBooks = books.filter((book) => book.type === type);
    for (const book of filteredBooks) {
      bookList.push(<AsideBook book={book} cardClicked={cardClickedHandler} />);
    }
    return bookList;
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
        {showModal && <Modal onClose={closeModal}>hello</Modal>}
        {renderCards()}
      </div>
    </div>
  );
};

export default RightMenu;
