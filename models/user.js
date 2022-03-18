const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  // 1:M user:kitty
  kitties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Kitty",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
