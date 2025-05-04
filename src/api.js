import axios from "axios";

const url = "http://localhost:3005/books";

const createBook = async (title) => {
  const response = await axios.post(url, { title });
  return response.data;
};

const fetchBooks = async () => {
  const response = await axios.get(url);
  return response.data;
};

const deleteBook = async (id) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};

const updateBook = async (id, title) => {
  const response = await axios.put(`${url}/${id}`, { title });
  return response.data;
};

export { createBook, fetchBooks, deleteBook, updateBook };
