import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import BookContext from "../../../store/book-context";
import AsideBook from "../../UI/aside-book/AsideBook";
import BottomLeft from "../../UI/modal/book-modal/BottomLeft";
import BottomRight from "../../UI/modal/book-modal/BottomRight";
import MiddleForm from "../../UI/modal/book-modal/MiddleForm";
import TopLeft from "../../UI/modal/book-modal/TopLeft";
import TopRight from "../../UI/modal/book-modal/TopRight";
import Modal from "../../UI/modal/Modal";
import { COMPLETED, READING, TO_READ } from "../Constants";
import styles from "./RightMenu.module.css";

const RightMenu = (props) => {
  let [type, setType] = useState("Reading");
  const [showModal, setShowModal] = useState(false);
  const [fetchedBook, setFetchedBook] = useState({});
  const [currentBookId, setCurrentBookId] = useState(null);
  const [currentbook, setCurrentBook] = useState({});

  const bookContext = useContext(BookContext);
  const { books } = bookContext;

  const headingClickedHandler = (type) => {
    setType(type);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentBookId(null);
    setCurrentBook({});
  };

  useEffect(() => {
    const fetchBook = async () => {
      if (currentBookId) {
        const response = await fetch("/api/" + currentBookId);
        const bookResult = await response.json();
        setFetchedBook(bookResult);
        setShowModal(true);
      }
    };
    fetchBook();
  }, [currentBookId]);

  const getSelectedBookContent = () => {
    return (
      <div className={styles.modal_main_content}>
        <TopLeft fetchedBook={fetchedBook} />
        <TopRight fetchedBook={fetchedBook} />
        <MiddleForm
          type={type}
          currentBook={currentbook}
          fetchedBook={fetchedBook}
          formAction={formHandler}
        />
        <BottomLeft fetchedBook={fetchedBook} />
        <BottomRight fetchedBook={fetchedBook} />
      </div>
    );
  };

  const formHandler = (type, book) => {
    if (type === "EDIT") {
      bookContext.editBook(book, type);
    } else {
      bookContext.removeBook(book, type);
    }
    closeModal();
  };

  const cardClickedHandler = async (book) => {
    setCurrentBook(book);
    setCurrentBookId(book.id);
  };

  const renderCards = () => {
    const filteredBooks = books.filter((book) => book.type === type);
    let content = filteredBooks.map((book) => {
      return (
        <AsideBook key={book.id} book={book} cardClicked={cardClickedHandler} />
      );
    });

    return content;
  };

  return (
    <div className={styles.aside_right}>
      <h3>Your List</h3>
      <div className={styles.card}>
        <div className={styles.card_heading}>
          <h6
            onClick={headingClickedHandler.bind(null, READING)}
            className={type === READING ? styles.card_heading_decoration : ""}
          >
            {READING}
          </h6>
          <h6
            onClick={headingClickedHandler.bind(null, TO_READ)}
            className={type === TO_READ ? styles.card_heading_decoration : ""}
          >
            {TO_READ.replaceAll("_", " ")}
          </h6>
          <h6
            onClick={headingClickedHandler.bind(null, COMPLETED)}
            className={type === COMPLETED ? styles.card_heading_decoration : ""}
          >
            {COMPLETED}
          </h6>
        </div>
        {showModal && (
          <Modal onClose={closeModal}>{getSelectedBookContent()}</Modal>
        )}
        {renderCards()}
      </div>
    </div>
  );
};

export default RightMenu;
