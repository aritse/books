import BookList from "./components/BookList";
import BookAdd from "./components/BookAdd";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (title) => {
    const id = Math.floor(Math.random() * 1234);
    const updatedBooks = [...books, { id, title }];
    setBooks(updatedBooks);
  };

  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { id, title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} editBookById={editBookById} deleteBookById={deleteBookById} />
      <BookAdd addBook={addBook} />
    </div>
  );
}

export default App;
