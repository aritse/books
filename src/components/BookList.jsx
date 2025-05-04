import React from "react";
import BookShow from "./BookShow";
import useBooks from "../hooks/use-books";

function BookList() {
  const { books } = useBooks();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
