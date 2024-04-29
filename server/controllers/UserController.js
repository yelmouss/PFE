const User = require("../models/User");
const bcrypt = require("bcrypt");
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
