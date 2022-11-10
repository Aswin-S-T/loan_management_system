const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    loan_id: { type: String, required: true },
    purpose: { type: String, required: true },
    status: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    region: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
