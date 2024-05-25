//for now I have used a JSON file as database which will be later turned into a dynamic Mongodb Collections
const DB = require("../sampleDB.json");

// All the functions are written in different js file called bookFunc
const bookFunc = require("../controllers/bookFunc");

/*
functionName: fetchBooks
whatItDoes: used for fetching all the books from the collection(Database).
requestType : GET
*/

const fetchBooks = (req, res) => {
  let resData = {
    msg: "Fetched Successfully",
    count: DB.length,
    data: DB,
  };

  res.send(resData);
};

/*
functionName: fetchBookById
whatItDoes: used for fetching specific book from the collection(Database) by using the Unique Book ID .
requestType : GET
*/

const fetchBookById = (req, res) => {
  console.log(":id route", req.query);
  let data = bookFunc.fetchBookById(req.query.id);
  res.send(data);
};

/*
functionName: fetchBookByYear
whatItDoes: used for fetching books from the collection(Database) by using the Book Year, this returns arrays of matching books .
requestType : GET
*/

const fetchBookByYear = (req, res) => {
  console.log("year route", req.query);
  let data = bookFunc.fetchBookByYear(req.query.year);
  res.send(data);
};

/*
functionName: fetchBookByGenre
whatItDoes: used for fetching books from the collection(Database) by using the Book Genre, this returns arrays of matching books .
requestType : GET
*/

const fetchBookByGenre = (req, res) => {
  console.log("genre route", req.query);
  let data = bookFunc.fetchBookByGenre(req.query.genre);
  res.send(data);
};

/*
functionName: fetchBookByLanguage
whatItDoes: used for fetching books from the collection(Database) by using the Book Language, this returns arrays of matching books .
requestType : GET
*/

const fetchBookByLanguage = (req, res) => {
  console.log("language route", req.query);
  let data = bookFunc.fetchBookByLanguage(req.query.lang);
  res.send(data);
};

/*
functionName: fetchBookByAuthor
whatItDoes: used for fetching books from the collection(Database) by using the Book author, this returns arrays of matching books .
requestType : GET
*/

const fetchBookByAuthor = (req, res) => {
  console.log("author route", req.query);
  let data = bookFunc.fetchBookByAuthor(req.query.author);
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
