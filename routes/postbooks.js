const postBook = (req, res) => {
  console.log("req.body", req.body);
  let resData = {
    msg: "book Successfully Created!",
    data: req.body,
  };

  res.send(resData);
};

const pushToDB = (book_obj) => {
  console.log("pushToDB loaded!");
  let sampleDB = fs.readFileSync("./sampleDB.json", "utf8");
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

  parsedData.push(finalObj);
  fs.writeFileSync("./sampleDB.json", JSON.stringify(parsedData));

  console.log("parsedData,", parsedData);
};

//   pushToDB(sampleData);

module.exports = {
  postBook,
};
