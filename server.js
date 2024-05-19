const express = require("express");
const fetch = require("./routes/fetchBooks");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 3001;

const DB = require("./sampleDB.json");

// console.log("DB", DB);

app.use((req, res, next) => {
  console.log("this is middleware");
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
