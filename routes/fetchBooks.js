const DB = require("../sampleDB.json");
const bookFunc = require("../controllers/bookFunc");

const fetchBooks = (req, res) => {
  let resData = {
    msg: "Fetched Successfully",
    count: DB.length,
    data: DB,
  };

  res.send(resData);
};

const fetchBookById = (req, res) => {
  console.log(":id route", req.params);
  let data = bookFunc.fetchBookById(req.params.id);
  res.send(data);
};

const fetchBookByYear = (req, res) => {
  console.log("year route", req.params);
  let data = bookFunc.fetchBookByYear(req.params.year);
  res.send(data);
};

const fetchBookByGenre = (req, res) => {
  console.log("genre route", req.params);
  let data = bookFunc.fetchBookByGenre(req.params.genre);
  res.send(data);
};

const fetchBookByLanguage = (req, res) => {
  console.log("language route", req.params);
  let data = bookFunc.fetchBookByLanguage(req.params.lang);
  res.send(data);
};

const fetchBookByAuthor = (req, res) => {
  console.log("author route", req.params);
  let data = bookFunc.fetchBookByAuthor(req.params.name);
  res.send(data);
};

module.exports = {
  fetchBooks,
  fetchBookById,
  fetchBookByYear,
  fetchBookByGenre,
  fetchBookByLanguage,
  fetchBookByAuthor,
};
