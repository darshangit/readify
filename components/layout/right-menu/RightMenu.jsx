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
import styles from "./RightMenu.module.css";

const RightMenu = (props) => {
  let [type, setType] = useState("Reading");
  const [showModal, setShowModal] = useState(false);
  const [currentBook, setCurrentBook] = useState({});
  const [currentBookId, setCurrentBookId] = useState(null);

  const bookContext = useContext(BookContext);
  const { books } = bookContext;

  const headingClickedHandler = (type) => {
    setType(type);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentBookId(null);
  };

  useEffect(() => {
    const fetchBook = async () => {
      if (currentBookId) {
        const response = await fetch("/api/" + currentBookId);
        const bookResult = await response.json();
        setCurrentBook(bookResult);
        setShowModal(true);
      }
    };
    fetchBook();
  }, [currentBookId]);

  const getSelectedBookContent = () => {
    return (
      <div className={styles.modal_main_content}>
        <TopLeft currentBook={currentBook} />
        <TopRight currentBook={currentBook} />
        <MiddleForm />
        <BottomLeft currentBook={currentBook} />
        <BottomRight currentBook={currentBook} />
      </div>
    );
  };
  const cardClickedHandler = async (book) => {
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
        {showModal && (
          <Modal onClose={closeModal}>{getSelectedBookContent()}</Modal>
        )}
        {renderCards()}
      </div>
    </div>
  );
};

export default RightMenu;
