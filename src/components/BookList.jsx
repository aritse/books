import BookShow from "./BookShow";

function BookList({ books, editBookById, deleteBookById }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        editBookById={editBookById}
        deleteBookById={deleteBookById}
      />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
