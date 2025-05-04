import React, { useState } from "react";
import BookEdit from "./BookEdit";
import useBooks from "../hooks/use-books";

function BookShow({ book }) {
  const [edit, setEdit] = useState(false);
  const { deleteBookById } = useBooks();

  const handleEditClick = () => {
    setEdit(!edit);
  };

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleSave = () => {
    setEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (edit) {
    content = <BookEdit book={book} onSave={handleSave} />;
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
