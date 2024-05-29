const fs = require("fs");
const path = require("path");

//for now I have used a JSON file as database which will be later turned into a dynamic Mongodb Collections
const DB = require("../sampleDB.json");

/*
functionName: fetchBookById
whatItDoes: used for fetching all the books from the collection(Database).
*/

const fetchBookById = (id) => {
  let resData = {
    msg: "Book not found in Database!",
    bookID: id,
    data: [],
  };
  try {
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
  } catch (error) {
    console.log("error", error);
  }
};

/*
functionName: fetchBookByYear
whatItDoes: used for fetching books from the collection(Database) by using the Book Year, this returns arrays of matching books .
*/
const fetchBookByYear = (year) => {
  let resData = {
    msg: "Book not found in Database!",
    count: 0,
    data: [],
  };

  try {
    DB.find((book) => {
      if (year == book.bookYear) {
        resData.msg = "Fetched Successfully";
        resData.data.push(book);
      }
      resData.count = resData.data.length;
    });

    return resData;
  } catch (error) {
    console.log("error", error);
    return {
      msg: error,
      count: 0,
      data: error,
    };
  }
};

/*
functionName: fetchBookByGenre
whatItDoes: used for fetching books from the collection(Database) by using the Book Genre, this returns arrays of matching books .
*/
const fetchBookByGenre = (genre) => {
  let resData = {
    msg: "Book not found in Database!",
    count: 0,
    data: [],
  };
  try {
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
  } catch (error) {
    console.log("error", error);
  }
};

/*
functionName: fetchBookByLanguage
whatItDoes: used for fetching books from the collection(Database) by using the Book Language, this returns arrays of matching books .
*/
const fetchBookByLanguage = (lang) => {
  let resData = {
    msg: "Book not found in Database!",
    count: 0,
    data: [],
  };
  try {
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
  } catch (error) {
    console.log("error", error);
  }
};

/*
functionName: fetchBookByAuthor
whatItDoes: used for fetching books from the collection(Database) by using the Book author, this returns arrays of matching books .
*/
const fetchBookByAuthor = (name) => {
  let resData = {
    msg: "Book not found in Database!",
    count: 0,
    data: [],
  };
  try {
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
  } catch (error) {
    console.log("error", error);
  }
};

/*
functionName: publishToDB
whatItDoes: used for publishing a new book into the existing collection(Database).
*/
const publishToDB = (book_obj) => {
  console.log("pushToDB loaded!");
  // console.log("D1");

  let resData = {
    msg: "Book Publishing failed!",
    count: 0,
    data: [],
  };
  try {
    let sampleDB = fs.readFileSync(path.resolve("sampleDB.json"), "utf8");
    // console.log("D2");
    // console.log("sampleDB", sampleDB);
    let parsedData = JSON.parse(sampleDB);
    const countBeforePublish = parsedData.length;
    console.log("countBeforePublish D3", countBeforePublish);

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

    // console.log("D4");
    parsedData.push(finalObj);
    // console.log("D5");

    fs.writeFileSync(
      path.resolve("sampleDB.json"),
      JSON.stringify(parsedData, null, 4)
    );

    console.log("DATA PUSHED!!");
    let afterPushJsonData = fs.readFileSync(
      path.resolve("sampleDB.json"),
      "utf8"
    );
    afterPushJsonData = JSON.parse(afterPushJsonData);
    const countAfterPublish = afterPushJsonData.length;
    console.log("countAfterPublish D6", countAfterPublish);
    // console.log("D7");

    if (countBeforePublish !== countAfterPublish) {
      // console.log("D8");
      resData.msg = "Published Successfully!";
      // resData.data = filteredBooks;
      resData.count = parsedData.length;
    }
    console.log("D9");
    return resData;
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  fetchBookById,
  fetchBookByYear,
  fetchBookByGenre,
  fetchBookByLanguage,
  fetchBookByAuthor,
  publishToDB,
};
