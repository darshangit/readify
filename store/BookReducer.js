const bookReducer = (state, action) => {
  switch (action.actionType) {
    case "ADD":
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

    default:
      break;
  }
};

export default bookReducer;
