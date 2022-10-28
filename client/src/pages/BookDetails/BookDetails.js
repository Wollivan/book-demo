import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_ENDPOINT } from "../../api";

export default function BookDetails() {
  const [book, setBook] = useState({});
  const [formUpdate, setFormUpdate] = useState({
    title: "",
    author: "",
    description: "",
    year: "",
    isbn: "",
  });

  useEffect(() => {
    getBookDetails();
  }, []);

  const { id } = useParams();

  const handleChangeUpdate = (e) => {
    setFormUpdate({ ...formUpdate, [e.target.name]: e.target.value });
  };

  const updateBook = async (e) => {
    e.preventDefault();

    const bodyToSend = {};

    for (const prop in formUpdate) {
      if (formUpdate[prop] !== "") {
        bodyToSend[prop] = formUpdate[prop];
      }
    }

    const API = `${API_ENDPOINT}/books/${id}`;
    const res = await axios.put(API, bodyToSend);
    console.log(res);
    getBookDetails();
  };

  const getBookDetails = async () => {
    const API = `${API_ENDPOINT}/books/${id}`;
    const res = await axios.get(API);
    setBook(res.data[0]);
  };

  if (!book) {
    return (
      <>
        <h1>Woops. Thats a 404.</h1>
        <p>The book with id {id} no longer exists</p>
        <Link to="/">Click here to go back home</Link>
      </>
    );
  }
  return (
    <div>
      <Link to="/">&#8617; Home</Link>
      <h1>{book.title}</h1>
      <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} alt={`${book.title} cover`} />
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>{book.year}</p>
      <p>ISBN: {book.isbn}</p>

      <form onSubmit={updateBook}>
        <input name="title" onChange={handleChangeUpdate} value={formUpdate.title} placeholder="Title of Book" />
        <input name="author" onChange={handleChangeUpdate} value={formUpdate.author} placeholder="Author" />
        <input name="description" onChange={handleChangeUpdate} value={formUpdate.description} placeholder="Description" />
        <input name="year" onChange={handleChangeUpdate} value={formUpdate.year} placeholder="Year of Release" />
        <input name="isbn" onChange={handleChangeUpdate} value={formUpdate.isbn} placeholder="ISBN Number" />
        <input type="submit" value="Create Book" />
      </form>
    </div>
  );
}
