import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled, { css } from "styled-components";
import BookContext from "../../../store/book-context";
import AsideBook from "../../UI/aside-book/AsideBook";
import BottomLeft from "../../UI/modal/book-modal/BottomLeft";
import BottomRight from "../../UI/modal/book-modal/BottomRight";
import MiddleForm from "../../UI/modal/book-modal/MiddleForm";
import TopLeft from "../../UI/modal/book-modal/TopLeft";
import TopRight from "../../UI/modal/book-modal/TopRight";
import Modal from "../../UI/modal/Modal";
import { COMPLETED, READING, TO_READ } from "../Constants";

const AsideMenuWrapper = styled.div`
  grid-area: ra;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* @media only screen and (max-width: 900px) {
      .card {
        width: 50%;
        height: 650px;
      }
    } */
`;

const Card = styled.div`
  background-color: white;
  width: 100%;
  height: 80vh;
  border-radius: 25px;
  margin-right: 10px;
  box-shadow: inset 0 10px 16px -6px #585856;
  overflow: scroll;


  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const CardHeading = styled.div`
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  font-family: "Kaushan Script"

`;

const CardHeaderItem = styled.h6`
  padding: 5px;

  ${(p) =>
    p.active
      ? css`
          background-image: linear-gradient(to right, #f8049c, #fdd54f);
          border-radius: 5px;
        `
      : ``}
`;

const MainAsideContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr 1fr);
  grid-auto-rows: 25vh 25vh 25vh;
  gap:10px;
`;

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
      <MainAsideContent>
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
      </MainAsideContent>
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
    <AsideMenuWrapper>
      <h3>Your List</h3>
      <Card>
        <CardHeading>
          <CardHeaderItem
            onClick={headingClickedHandler.bind(null, READING)}
            active={type === READING}
          >
            {READING}
          </CardHeaderItem>
          <CardHeaderItem
            onClick={headingClickedHandler.bind(null, TO_READ)}
            active={type === TO_READ}
          >
            {TO_READ.replaceAll("_", " ")}
          </CardHeaderItem>
          <CardHeaderItem
            onClick={headingClickedHandler.bind(null, COMPLETED)}
            active={type === COMPLETED}
          >
            {COMPLETED}
          </CardHeaderItem>
        </CardHeading>
        {showModal && (
          <Modal onClose={closeModal}>{getSelectedBookContent()}</Modal>
        )}
        {renderCards()}
      </Card>
    </AsideMenuWrapper>
  );
};

export default RightMenu;
