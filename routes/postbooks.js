// All the functions are written in different js file called bookFunc
const bookFunc = require("../controllers/bookFunc");

/*
functionName: postBook
whatItDoes: used for publishing a new book into the existing collection(Database).
requestType : POST
*/

const postBook = (req, res) => {
  //publishToDB is a controller function which does the required operation and returns the output
  let response = bookFunc.publishToDB(req.body);
  res.send(response);
};

module.exports = {
  postBook,
};
