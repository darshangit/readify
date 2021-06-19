import { useState } from "react";
import Search from "../../components/search/SearchContainer/Search";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const searchHandler = async (search) => {
    if (search?.searchText) {
      const response = await fetch("/api/search", {
        method: "POST",
        body: search.searchText,
      });
      const searchResult = await response.json();
      setBooks(searchResult.items);
    }
  };
  return <Search searchHandler={searchHandler} books={books} />;
};

export default SearchPage;
