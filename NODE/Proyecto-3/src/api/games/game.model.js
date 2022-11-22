const mongoose = require("mongoose");
const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    cover: { type: String },
    year: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("games", gameSchema);
