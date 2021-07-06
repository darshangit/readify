const bookReducer = (state, action) => {
  switch (action.actionType) {
    case "ADD": {
      const addedBook = { ...action.book, type: action.type };
      let books = [];
      const existingIndex = state.books.findIndex((book) => {
        return book.id == addedBook.id;
      });

      if (state.books[existingIndex]) {
        state.books[existingIndex] = addedBook;
        books = state.books;
      } else {
        books = state.books.concat(addedBook);
      }

      return {
        books,
      };
    }

    case "EDIT": {
      let books = [];
      const editedBook = action.book;
      const existingIndex = state.books.findIndex((book) => {
        return book.id == editedBook.id;
      });

      state.books[existingIndex] = editedBook;
      books = state.books;
      return { books };
    }

    case "DELETE": {
      let books = [];
      const deletedBook = action.book;
      const existingIndex = state.books.findIndex((book) => {
        return book.id == deletedBook.id;
      });

      state.books.splice(existingIndex, 1);
      books = state.books;

      return { books };
    }

    default:
      break;
  }
};

export default bookReducer;
