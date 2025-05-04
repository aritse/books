import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookAdd from "./components/BookAdd";
import { createBook, fetchBooks, deleteBook, updateBook } from "./api";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const books = await fetchBooks();
      setBooks(books);
    }
    fetchData();
  }, []);

  const addBook = async (title) => {
    const { id } = await createBook(title);
    const updatedBooks = [...books, { id, title }];
    setBooks(updatedBooks);
  };

  const editBookById = async (id, title) => {
    const data = await updateBook(id, title);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return data;
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    deleteBook(id);
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
