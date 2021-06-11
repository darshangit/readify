import { useState } from "react";
import MainBook from "../components/book/main-book";
import Search from "../components/search/Search";
import styles from "./index.module.css";

export const Home = (props) => {
  const [books, setBooks] = useState([]);

  const searchHandler = async (search) => {
    const response = await fetch("/api/" + search.searchText);
    const searchResult = await response.json();
    setBooks(searchResult.items);
  };

  return (
    <div>
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

export default Home;
