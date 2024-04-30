const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.register = async (req, res) => {
  try {
    const { username, password, fullname } = req.body;
    const HashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: HashedPassword,
      fullname,
    });
    await user.save();
    res.status(200).json({ message: "User created successfuly" });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        Userid: user._id,
        isAdmin: user.isAdmin,
        Fullname: user.fullname,
        username: user.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    res.status(200).json({
      message: "User logged in successfuly",
      token,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
