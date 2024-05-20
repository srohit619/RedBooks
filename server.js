const express = require("express");
const fetch = require("./routes/fetchBooks");
const post = require("./routes/postbooks");
const login = require("./utility/auth");
const dotenv = require("dotenv").config();
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

const DB = require("./sampleDB.json");

// console.log("DB", DB);

app.use((req, res, next) => {
  console.log("this is middleware");
  console.log("login.testAuthCheck", login.testAuthCheck);
  next();
});

//fetch all the books
app.get("/books", fetch.fetchBooks);

//fetch the book by ID
app.get("/book/:id", fetch.fetchBookById);

//fetch the book by Year
app.get("/book/year/:year", fetch.fetchBookByYear);

//fetch the book by Genre
app.get("/book/genre/:genre", fetch.fetchBookByGenre);

//fetch the book by Genre
app.get("/book/language/:lang", fetch.fetchBookByLanguage);

//fetch the book by Genre
app.get("/book/author/:name", fetch.fetchBookByAuthor);

//fetch the book by Genre
app.post("/new-book", post.postBook);

app.listen(port, () => console.log(`Server running on Port: ${port}!`));
