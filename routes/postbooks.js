// const DB = require("../sampleDB.json");

// console.log("DB", DB);
const fs = require("fs");
const postBook = (req, res) => {
  // console.log("req.body", req.body);
  let resData = {
    msg: "book Successfully Created!",
    data: req.body,
  };

  res.send(resData);
};

// let sampleDB = fs.readFileSync("../sampleDB.json", "utf8");
// console.log("sampleDB".sampleDB);

const pushToDB = (book_obj) => {
  console.log("pushToDB loaded!");
  let parsedData = JSON.parse(sampleDB);
  let uniqueBookID = parsedData.length + 1;
  let finalObj = {
    bookID: uniqueBookID,
    bookTitle: book_obj.bookTitle,
    bookAuthor: book_obj.bookAuthor,
    bookGenre: book_obj.bookGenre,
    bookYear: book_obj.bookYear,
    bookPublisher: book_obj.bookPublisher,
    bookPages: book_obj.bookPages,
    bookLanguage: book_obj.bookLanguage,
  };

  // parsedData.push(finalObj);
  // fs.writeFileSync("./sampleDB.json", JSON.stringify(parsedData));

  console.log("parsedData,", parsedData);
};

let sampleData = {
  bookTitle: "Rohik sick",
  bookAuthor: "Herman Melville",
  bookGenre: "Adventure",
  bookYear: "1851",
  bookPublisher: "Harper & Brothers",
  bookPages: "635",
  bookLanguage: "English",
};

// pushToDB(sampleData);

module.exports = {
  postBook,
};
