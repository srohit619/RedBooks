const express = require("express");
const bookFunc = require("./func/bookFunc");
const fetch = require("./routes/fetchBooks");
const dotenv = require("dotenv").config();
const fs = require("fs");
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
app.get("/book/:id", (req, res) => {
  console.log(":id route", req.params);
  let data = bookFunc.fetchBookById(req.params.id);
  res.send(data);
});

//fetch the book by Year
app.get("/book/year/:year", (req, res) => {
  console.log("year route", req.params);
  let data = bookFunc.fetchBookByYear(req.params.year);
  res.send(data);
});

//fetch the book by Genre
app.get("/book/genre/:genre", (req, res) => {
  console.log("genre route", req.params);
  let data = bookFunc.fetchBookByGenre(req.params.genre);
  res.send(data);
});

//fetch the book by Genre
app.get("/book/language/:lang", (req, res) => {
  console.log("language route", req.params);
  let data = bookFunc.fetchBookByLanguage(req.params.lang);
  res.send(data);
});

//fetch the book by Genre
app.get("/book/author/:name", (req, res) => {
  console.log("author route", req.params);
  let data = bookFunc.fetchBookByAuthor(req.params.name);
  res.send(data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
