import { useReducer } from "react";
import BookContext from "./book-context";
import bookReducer from "./BookReducer";
const defaultBookState = {
  books: [],
};

const BookProvider = (props) => {
  const [bookState, dispatchBookAction] = useReducer(
    bookReducer,
    defaultBookState
  );

  const addBookHandler = (book, type) => {
    console.log("addBookHandler", book);
  };

  const removedBookHandler = (id, type) => {
    console.log("removedBookHandler", id);
  };

  const editBookHandler = (book, type) => {
    console.log("editBookHandler", book);
  };

  const bookContext = {
    books: bookState.books,
    addBook: addBookHandler,
    removeBook: removedBookHandler,
    editBook: editBookHandler,
  };

  return (
    <BookContext.Provider value={bookContext}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
