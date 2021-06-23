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
    dispatchBookAction({ actionType: "ADD", type, book });
  };

  const removedBookHandler = (id, type) => {
    console.log("removedBookHandler", id);
  };

  const editBookHandler = (book, type) => {
    console.log("editBookHandler", book);
  };

  const getBooksHandler = (type) => {
    console.log("getBooksHandler", bookState?.books);
    return bookState?.books?.filter((book) => book.type === type);
  };

  const bookContext = {
    books: bookState.books,
    addBook: addBookHandler,
    removeBook: removedBookHandler,
    editBook: editBookHandler,
    getBooks: getBooksHandler,
  };

  return (
    <BookContext.Provider value={bookContext}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
