const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  year: String,
  isbn: String,
  cover: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
