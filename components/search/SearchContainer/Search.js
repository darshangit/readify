import { useState } from "react";
import MainBook from "../../book/main-book";
import Search from "../SearchForm";
import styles from "./Search.module.css";

const Main = (props) => {
  return (
    <div className={styles.main_content}>
      <div className={styles.search_container}>
        <Search search={props.searchHandler} />
      </div>
      <div className={styles.book_container}>
        {props?.books?.map((book) => {
          return <MainBook key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Main;
