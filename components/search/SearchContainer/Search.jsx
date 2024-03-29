import { useContext, useState } from "react";
import styled from "styled-components";
import BookContext from "../../../store/book-context";
import { toastIt } from "../../layout/Common";
import MainBook from "../../UI/book/Main-Book";
import { Spinner } from "../../UI/elements/Spinner";
import Search from "../SearchForm";

const SearchWrapper = styled.div`
  background-color: #fff;
  grid-area: main;
  grid-column: 1fr;
  font-family: "Architects Daughter";
  :first-child {
    margin: 20px 0;
  }

  p{
    margin: 16px auto;
  }
`;

const BookContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);
  width: 100%;
  height: 100vh;
  overflow: scroll;

  @media (max-width: 900px) {
    height: 60vh;
  }
`;
const Main = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const bookContext = useContext(BookContext);

  const searchHandler = async (search) => {
    if (search?.searchText) {
      setLoading(true);
      const response = await fetch("/api/search", {
        method: "POST",
        body: search.searchText,
      });
      const searchResult = await response.json();
      setLoading(false);
      setBooks(searchResult.items);
    }
  };

  const bookActionHandler = (book, eventType) => {
    toastIt(`"${book.volumeInfo.title}" added to ${eventType} list`);
    bookContext.addBook(book, eventType);
  };
  return (
    <SearchWrapper>
      <Search search={searchHandler} />
      {isLoading && <Spinner />}
      {books && books.length > 0 && (
        <BookContainer>
          {books?.map((book) => {
            return (
              <MainBook
                key={book.id}
                book={book}
                bookAction={bookActionHandler}
              />
            );
          })}
        </BookContainer>
      )}
    </SearchWrapper>
  );
};

export default Main;
