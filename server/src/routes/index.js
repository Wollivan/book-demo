const booksRouter = require("express").Router();

const getBookList = require("../controllers/GETBooks");

booksRouter.route("/books").get(getBookList);

module.exports = booksRouter;
