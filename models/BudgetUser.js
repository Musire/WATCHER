const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }]
  });

module.exports = BudgetUser = mongoose.model("BudgetUser", UserSchema)