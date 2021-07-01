import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import BookContext from "../../../store/book-context";
import AsideBook from "../../UI/aside-book/AsideBook";
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
        <div className={styles.top_left}>
          <img
            src={currentBook?.volumeInfo?.imageLinks?.thumbnail || "404.png"}
            alt="Image"
          />
        </div>
        <div className={styles.top_right}>
          <span className={styles.title}>{currentBook?.volumeInfo?.title}</span>
          <span className={styles.author}>
            {currentBook?.volumeInfo?.authors?.join(", ") || "NA"}
          </span>
          <div
            className={styles.wrap_content}
            dangerouslySetInnerHTML={{
              __html: `${currentBook?.volumeInfo?.description || "NA"}`,
            }}
          ></div>
        </div>
        <div className={styles.middle}>Middle</div>
        <div className={`${styles.bottom_left} ${styles.wrap_bottom_content}`}>
          <div className={styles.bottom_inner_left}>
            <div>
              <p className={styles.bottom_title}>Total Pages</p>
              <p className={styles.bottom_text}>
                {currentBook?.volumeInfo?.pageCount || "NA"}
              </p>
            </div>
            <div>
              <p className={styles.bottom_title}>Average Rating</p>
              <p className={styles.bottom_text}>
                {currentBook?.volumeInfo?.averageRating || "NA"}
              </p>
            </div>
          </div>
          <div>
            <p className={styles.bottom_title}>Categories</p>
            <p className={styles.bottom_text}>
              {currentBook?.volumeInfo?.categories?.join(", ") || "NA"}
            </p>
          </div>
        </div>
        <div className={`${styles.bottom_right} ${styles.wrap_bottom_content}`}>
          <div className={styles.inner_bottom_right}>
            <div>
              <p className={styles.bottom_title}>Publisher</p>
              <p
                className={`${styles.bottom_text} ${styles.bottom_text_publisher_wrap}`}
              >
                {currentBook?.volumeInfo?.publisher || "NA"}
              </p>
            </div>
            <div>
              <p className={styles.bottom_title}>Published Date</p>
              <p className={styles.bottom_text}>
                {currentBook?.volumeInfo?.publishedDate || "NA"}
              </p>
            </div>
          </div>
          <div>
            <p className={styles.bottom_title}>ISBN</p>
            {currentBook?.volumeInfo?.industryIdentifiers?.map((item) => {
              return (
                <span className={styles.bottom_text}>
                  {item.type} :{" "}
                  <span>
                    {item.identifier} <br />
                  </span>
                </span>
              );
            }) || "NA"}
          </div>
        </div>
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
