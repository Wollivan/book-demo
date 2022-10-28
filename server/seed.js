const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create({
    title: "The Hobbit",
    description: "A small man goes and kills a dragon or something...",
    year: "1937",
  });

  await Book.create({
    title: "The Silmarilion",
    description: "Basically the Bible except its fantasy.",
    year: "1977",
  });

  console.log("Books summoned!");
}

seed();
