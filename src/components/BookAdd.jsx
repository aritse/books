import React, { useState } from "react";
import useBooks from "../hooks/use-books";

function BookAdd() {
  const [title, setTitle] = useState("");
  const { addBook } = useBooks();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(title);
    setTitle("");
  };

  return (
    <div className="book-add">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label className="label">Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Add</button>
      </form>
    </div>
  );
}

export default BookAdd;
