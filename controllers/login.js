function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const token = makeid(50);

const username = "rohit";
const password = "abc@123";

const token_generation = (userid, pass) => {
  console.log("userid", userid);
  console.log("pass", pass);
  let flag = 0;

  if (username == userid && password == pass) {
    // console.log('userid valid');
    return {
      status: "successful",
      msg: `Token Generation successful!`,
      token: token,
    };
  } else {
    return { status: "unsuccessful", msg: `Username or Password Invalid!` };
  }
};

module.exports = {
  token_generation,
};
