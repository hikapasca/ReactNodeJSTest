const { User } = require("../models");
const { hashPassword, decodePassword } = require("../helpers/brcypt");
const { jwtSign } = require("../helpers/jsonwebtoken");
class UserController {
  static async login(req, res) {
    try {
      const { username } = req.body;
      const { password } = req.body;
      if (!username) {
        return res.status(400).json({ message: "username cannot empty" });
      } else if (!password) {
        return res.status(400).json({ message: "password cannot empty" });
      } else {
        const findByUsername = await User.findOne({ where: { username } });
        if (!findByUsername) {
          return res.status(400).json({ message: "wrong username/password" });
        } else {
          const checkPassword = decodePassword(
            password,
            findByUsername.password
          );
          if (!checkPassword) {
            return res.status(400).json({ message: "wrong username/password" });
          } else {
            const jwt = jwtSign({ username });
            return res.status(200).json({ access_token: jwt });
          }
        }
      }
    } catch (err) {}
  }

  static async register(req, res) {
    try {
      const { username } = req.body;
      const { password } = req.body;
      const hashingPassword = hashPassword(password);
      const newUser = {
        username,
        password: hashingPassword,
      };
      const findOne = await User.findOne({ where: { username } });
      if (findOne) {
        return res
          .status(400)
          .json({ message: "this user has been registered before" });
      } else {
        const response = await User.create(newUser);
        return res.status(201).json({ message: response });
      }
    } catch (err) {
      if (err.name == "SequelizeValidationError") {
        return res.status(400).json({ message: err.errors[0].message });
      } else {
        return res.status(500).json({ message: err });
      }
    }
  }
}

module.exports = UserController;
