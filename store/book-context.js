import React from "react";

const BookContext = React.createContext({
  books: [],
  addBook: (book, type) => {},
  removeBook: (id, type) => {},
  editBook: (book, type) => {},
  getBooks: (type) => {},
});

export default BookContext;
