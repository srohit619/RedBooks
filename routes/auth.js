const login = require("../controllers/login");

const loginCheck = (req, res) => {
  console.log("loginCheck route: ", req.headers.username);
  let username = req.headers.username;
  let paswword = req.headers.password;

  let data = login.token_generation(username, paswword);
  res.send(data);
};

module.exports = {
  loginCheck,
};
