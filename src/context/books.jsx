import React, { createContext, useState, useCallback } from "react";
import { fetchBooks, createBook, deleteBook, updateBook } from "../api";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const getBooks = useCallback(async () => {
    const books = await fetchBooks();
    setBooks(books);
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

  const deleteBookById = async (id) => {
    await deleteBook(id);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const value = { books, getBooks, addBook, editBookById, deleteBookById };

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
