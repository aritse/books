import React, { useState } from "react";
import useBooks from "../hooks/use-books";

function BookEdit({ book, onSave }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooks();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave();
    editBookById(book.id, title);
  };

  return (
    <div className="book-edit">
      <form onSubmit={handleSubmit}>
        <label className="label">Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
