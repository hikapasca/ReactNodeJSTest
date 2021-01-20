let jwt = require("jsonwebtoken");
let private_key = process.env.PRIVATE_KEY;

const jwtSign = (data) => {
  var token = jwt.sign(data, private_key);
  return token;
};

const jwtVerify = (token) => {
  var decoded = jwt.verify(token, PRIVATE_KEY);
  return decoded;
};

module.exports = { jwtSign, jwtVerify };
