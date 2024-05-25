const fs = require("fs");
const path = require("path");
const bookFunc = require("../controllers/bookFunc");

const postBook = (req, res) => {
  let response = bookFunc.publishToDB(req.body);
  res.send(response);
};

module.exports = {
  postBook,
};
