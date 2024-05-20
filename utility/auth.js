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
console.log("token", token);

const username = "rohit";
const password = "abc@123";

const token_generation = (userid, pass) => {
  let flag = 0;

  if (username == userid && password == pass) {
    // console.log('userid valid');
    return {
      status: "successful",
      msg: `Token Generation successful! \n Your Token :${token}`,
    };
  } else {
    return { status: "unsuccessful", msg: `Username or Password Invalid!` };
  }
};

const auth_user = (gen_token) => {
  if (gen_token === token) {
    const callapi = (req, res) => {
      console.log("a");
      res.send("Hello this is my first api EndPoint! Route 1");
    };
  } else {
    const callapi = (req, res) => {
      console.log("b");
      res.send("asdasdasdas");
    };
  }
};

const testAuthCheck = () => {
  console.log("hellooo");
};

var test_auth = token_generation("rohit", "abc@123");
module.exports = { token_generation, auth_user, testAuthCheck };
