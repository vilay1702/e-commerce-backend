const User = require("../models/user");

const getUser = async (req, res) => {
  let response = [];
  try {
    const data = req.query;
    console.log("data:", data);
    if (data == {}) {
      res.status(404).send({ isLoggedIn: false });
      return;
    }
    response = await User.find({ ...data });
    console.log(response);
    if (response.length == 0) {
      res.status(200).send({ isLoggedIn: false });
      return;
    }
  } catch (error) {
    console.log("\n\nError in getUser\n", error);
    res.status(500).json({ message: "Internal server error" });
  }
  res.status(200).send({ isLoggedIn: true, userName: response[0].userName });
};

const createUser = async (req, res) => {
  let response = {};
  try {
    const user = req.body;
    response = await User.create({ ...user });
    if (response == {}) {
      res.status(404).json({ message: "User not created" });
    }
  } catch (error) {
    console.log("\n\nError in create user\n", error);
    res.status(500).json({ message: "Internal server error" });
  }
  res.status(200).json({ data: response });
};

module.exports = { getUser, createUser };
