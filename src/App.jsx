import React, { useEffect } from "react";
import BookList from "./components/BookList";
import BookAdd from "./components/BookAdd";
import useBooks from "./hooks/use-books";

function App() {
  const { getBooks } = useBooks();

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookAdd />
    </div>
  );
}

export default App;
