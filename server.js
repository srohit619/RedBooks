const express = require("express");
var bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

// These are Custom Modules which are imported using Require
const fetch = require("./routes/fetchBooks");
const post = require("./routes/postbooks");
const login = require("./routes/auth");
const deletBook = require("./routes/deleteBooks");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
  console.log("this is middleware");
  next();
});

//fetch all the books
app.get("/books", fetch.fetchBooks);

//Generates Token for using the api
app.get("/generate-token", login.loginCheck);

// Used route and conditionals for GET Requests
app
  .route("/book/")
  .get((req, res) => {
    const { id, year, genre, lang, author } = req.query;

    if (id) {
      fetch.fetchBookById(req, res);
    } else if (year) {
      fetch.fetchBookByYear(req, res);
    } else if (genre) {
      fetch.fetchBookByGenre(req, res);
    } else if (lang) {
      fetch.fetchBookByLanguage(req, res);
    } else if (author) {
      fetch.fetchBookByAuthor(req, res);
    } else {
      res.status(400).send("No valid query parameter provided.");
    }
  })
  .post(post.postBook)
  .delete(deletBook.deleteBookById);

app.listen(port, () => console.log(`Server running on Port: ${port}!`));
