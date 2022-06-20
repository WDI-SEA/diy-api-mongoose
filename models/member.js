const mongoose = require("mongoose")

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Member", memberSchema)
