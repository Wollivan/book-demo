import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BookDetails from "./pages/BookDetails/BookDetails";

function App() {
  const [books, setBooks] = useState([]);
  const [createForm, setCreateForm] = useState({
    title: "",
    author: "",
    description: "",
    year: "",
    isbn: "",
  });

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleChangeCreate = (e) => {
    setCreateForm({ ...createForm, [e.target.name]: e.target.value });
  };

  // function to get all books
  const getAllBooks = async () => {
    const API = `http://localhost:8080/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  };

  // function to create new book
  const createNewBook = async (e) => {
    e.preventDefault();

    const API = `http://localhost:8080/books`;
    const res = await axios.post(API, createForm);

    // reset the input fields
    setCreateForm({
      title: "",
      description: "",
      year: "",
    });

    // add our new book to the page
    setBooks([...books, res.data]);
  };

  // function to delete book
  const deleteBook = async (bookObj) => {
    const check = window.confirm(`Are you sure you want to delete ${bookObj.title}?`);
    // stop the rest of the function running if they say no
    if (!check) {
      return;
    }

    const API = `http://localhost:8080/books/${bookObj._id}`;
    const res = await axios.delete(API);
    if (res.data.deletedCount === 1) {
      getAllBooks();
    } else {
      alert("There was a problem deleting that book.");
    }
  };

  // function to edit book

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                books={books}
                deleteBook={deleteBook}
                createNewBook={createNewBook}
                handleChangeCreate={handleChangeCreate}
                createForm={createForm}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// /book/:name/:age
// /book/tim/28

// {name: "Tim", age: 28}
