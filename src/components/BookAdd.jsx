import { useState } from "react";

function BookAdd({ addBook }) {
  const [title, setTitle] = useState("");

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
