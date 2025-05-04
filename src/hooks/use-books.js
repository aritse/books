import { useContext } from "react";
import BooksContext from "../context/books";

function useBooks() {
  return useContext(BooksContext);
}

export default useBooks;
