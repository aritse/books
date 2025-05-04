import React from "react";
import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, editBookById, deleteBookById }) {
  const [edit, setEdit] = useState(false);

  const handleEditClick = () => {
    setEdit(!edit);
  };

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleSave = (title) => {
    setEdit(false);
    editBookById(book.id, title);
  };

  let content = <h3>{book.title}</h3>;
  if (edit) {
    content = <BookEdit book={book} handleSave={handleSave} />;
  }

  return (
    <div className="book-show">
      <div className="actions">
        <button className="edit" onClick={handleEditClick} />
        <button className="delete" onClick={handleDeleteClick} />
      </div>
      <img src={`https://picsum.photos/seed/${book.id}300/200`} alt="book" />
      <div>{content}</div>
    </div>
  );
}

export default BookShow;
