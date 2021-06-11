import styles from "./main-book.module.css";

const MainBook = (props) => {
  let book = props.book;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_top}>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Image" />
        </div>
        <div className={styles.card_body}>
          <div className={styles.title}>
            <p>{book.volumeInfo.title} </p>
          </div>
          {book.volumeInfo.pageCount && (
            <p className={styles.page_count}>
              <span>{book.volumeInfo.pageCount} Pages </span>
            </p>
          )}
          <div className={styles.card_info}>
            {book.volumeInfo.authors && (
              <div>
                <p className={styles.author_title}>Authors</p>
                <div className={styles.author_names}>
                  {book.volumeInfo.authors.map((author, index) => {
                    return <p key={index}>{author}</p>;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBook;
