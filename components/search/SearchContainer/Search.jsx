import { useContext, useState } from "react";
import BookContext from "../../../store/book-context";
import { toastIt } from "../../layout/Common";
import MainBook from "../../UI/book/Main-Book";
import Search from "../SearchForm";
import styles from "./Search.module.css";

const Main = () => {
  const [books, setBooks] = useState([]);
  const bookContext = useContext(BookContext);

  const searchHandler = async (search) => {
    if (search?.searchText) {
      const response = await fetch("/api/search", {
        method: "POST",
        body: search.searchText,
      });
      const searchResult = await response.json();
      setBooks(searchResult.items);
    }
  };

  const bookActionHandler = (book, eventType) => {
    toastIt(`"${book.volumeInfo.title}" added to ${eventType} list`);
    bookContext.addBook(book, eventType);
  };
  return (
    <div className={styles.main_content}>
      <div className={styles.search_container}>
        <Search search={searchHandler} />
      </div>
      {books.length > 0 && (
        <div className={styles.book_container}>
          {books?.map((book) => {
            return (
              <MainBook
                key={book.id}
                book={book}
                bookAction={bookActionHandler}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
