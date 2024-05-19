const DB = require("../sampleDB.json");

const fetchBooks = (req, res) => {
  let resData = {
    msg: "Fetched Successfully",
    count: DB.length,
    data: DB,
  };

  res.send(resData);
};

module.exports = { fetchBooks };
