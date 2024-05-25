/*
functionName: deleteBookById
whatItDoes: used for Deleting a book from the existing collection(Database).
requestType : DELETE
*/

const deleteBookById = (req, res) => {
  console.log("deleteBookById");
  let resData = {
    msg: "Book Deleted from the Database!",
  };
  res.send(resData);
};

module.exports = {
  deleteBookById,
};
