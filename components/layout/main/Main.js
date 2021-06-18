import { useState } from "react";
import MainBook from "../../book/main-book";
import Search from "../../search/Search";
import styles from "./Main.module.css";

const searchHandler = async (search) => {
  const response = await fetch("/api/" + search.searchText);
  const searchResult = await response.json();
  setBooks(searchResult.items);
};

const Main = (props) => {
  const [books, setBooks] = useState([]);

  return (
    <div className={styles.main_content}>
      <div className={styles.search_container}>
        <Search search={searchHandler} />
      </div>
      <div className={styles.book_container}>
        {books.map((book) => {
          return <MainBook key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Main;
