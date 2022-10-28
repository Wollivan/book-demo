import React from "react";
import { Link } from "react-router-dom";

export default function Book({ books, deleteBook }) {
  return (
    <>
      <h2>Tim's Favourite Books</h2>
      <div className="books">
        {books.map((bookObj, idx) => {
          return (
            <div className="book" key={idx}>
              <span className="delete" onClick={() => deleteBook(bookObj)}>
                &#9447;
              </span>
              <Link to={`/book/${bookObj._id}`} className="book-link">
                <h3>{bookObj.title}</h3>
                <img src={`https://covers.openlibrary.org/b/isbn/${bookObj.isbn}-L.jpg`} alt={`${bookObj.title} cover`} />
              </Link>
              <p>{bookObj.description}</p>
              <p>Year of release: {bookObj.year}</p>
              <p>ISBN: {bookObj.isbn}</p>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
