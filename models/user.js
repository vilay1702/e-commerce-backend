const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    default: [true, "userName must be provided"],
    unique: [true, "userName must be unique"],
  },

  password: {
    type: String,
    default: [true, "password must be provided"],
  },
});

module.exports = mongoose.model("User", UserSchema);
