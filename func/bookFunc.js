const DB = require("../sampleDB.json");

const fetchBookById = (id) => {
  let resData = {
    msg: "Book not found in Database!",
    bookID: id,
    data: [],
  };
  //   let data = "Book not found in Database!";

  const book = DB.find((book) => {
    // console.log("id == book.bookID", id === book.bookID);
    return id === book.bookID;
  });

  if (book) {
    resData.msg = "Fetched Successfully";
    data = resData.data.push(book);
    console.log("book.bookID", book.bookID);
  }

  return resData;
};

const fetchBookByYear = (year) => {
  let resData = {
    msg: "Book not found in Database!",
    count: 0,
    data: [],
  };

  DB.find((book) => {
    if (year == book.bookYear) {
      resData.msg = "Fetched Successfully";
      resData.data.push(book);
    }
    resData.count = resData.data.length;
  });

  return resData;
};

const fetchBookByGenre = (genre) => {
  let resData = {
    msg: "Book not found in Database!",
    count: 0,
    data: [],
  };

  // Convert the genre parameter to lowercase for case-insensitive comparison
  const lowerCaseGenre = genre.toLowerCase();

  // Filter books by genre
  const filteredBooks = DB.filter((book) => {
    return book.bookGenre.toLowerCase().includes(lowerCaseGenre);
  });

  // Update the response data if books are found
  if (filteredBooks.length > 0) {
    resData.msg = "Fetched Successfully";
    resData.data = filteredBooks;
    resData.count = filteredBooks.length;
  }

  return resData;
};

const fetchBookByLanguage = (lang) => {
  let resData = {
    msg: "Book not found in Database!",
    count: 0,
    data: [],
  };

  // Convert the lang parameter to lowercase for case-insensitive comparison
  const lowerCaseGenre = lang.toLowerCase();

  // Filter books by genre
  const filteredBooks = DB.filter((book) => {
    return book.bookLanguage.toLowerCase().includes(lowerCaseGenre);
  });

  // Update the response data if books are found
  if (filteredBooks.length > 0) {
    resData.msg = "Fetched Successfully";
    resData.data = filteredBooks;
    resData.count = filteredBooks.length;
  }

  return resData;
};

const fetchBookByAuthor = (name) => {
  let resData = {
    msg: "Book not found in Database!",
    count: 0,
    data: [],
  };

  // Convert the lang parameter to lowercase for case-insensitive comparison
  const lowerCaseGenre = name.toLowerCase();

  // Filter books by genre
  const filteredBooks = DB.filter((book) => {
    return book.bookAuthor.toLowerCase().includes(lowerCaseGenre);
  });

  // Update the response data if books are found
  if (filteredBooks.length > 0) {
    resData.msg = "Fetched Successfully";
    resData.data = filteredBooks;
    resData.count = filteredBooks.length;
  }

  return resData;
};

module.exports = {
  fetchBookById,
  fetchBookByYear,
  fetchBookByGenre,
  fetchBookByLanguage,
  fetchBookByAuthor,
};
