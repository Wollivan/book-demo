const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./src/models/book");

mongoose.connect(process.env.DATABASE_URL);
const bookStarts = [
  [
    {
      title: "The Silmarilion",
      description: "Basically the Bible except its fantasy.",
      year: "1977",
      isbn: "9780618391110",
    },
    {
      title: "Twilight",
      description: "Shiny vampires",
      year: "2009",
      isbn: "9780316015844",
    },
    {
      title: "The  Hobbit",
      author: "JRR Tolkien",
      description: "Bilbo does a nusiance.",
      year: "1937",
      isbn: "9780547928227",
    },
    {
      title: "The  Fellowship of the Ring",
      author: "JRR Tolkien",
      description: "Frodo does a nusiance.",
      year: "1954",
      isbn: "0261102354",
    },
  ],
];

async function seed() {
  bookStarts.forEach(async (book) => {
    await Book.create({
      title: book.title,
      author: book.author,
      description: book.description,
      year: book.year,
      isbn: book.isbn,
    });
  });

  console.log("Books summoned!");
}

seed();
