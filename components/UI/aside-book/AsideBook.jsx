import styles from "./AsideBook.module.css";

const AsideBook = (props) => {
  const book = props.book;
  return (
    <div onClick={props.cardClicked} className={styles.single_card}>
      <img
        src={book.volumeInfo?.imageLinks?.thumbnail || "404.png"}
        alt="Image"
      />
      <div className={styles.middle_portion}>
        <span className={`${styles.wrap_text} ${styles.title}`}>
          {book?.volumeInfo?.title}
        </span>
        <span className={`${styles.wrap_text} ${styles.author}`}>
          {book?.volumeInfo?.authors?.join(", ")}
        </span>
      </div>
      <div className={styles.right_portion}>
        <p>50%</p>
      </div>
    </div>
  );
};

export default AsideBook;
