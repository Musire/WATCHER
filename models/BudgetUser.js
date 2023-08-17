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
    income: {
      type: Number
    },
    expenses: {
      type: Number
    },
    transfers: {
      type: Number
    }
  });


UserSchema.virtual('total').get(function () {
  return (this.income - (this.expenses + this.transfers))
});


module.exports = BudgetUser = mongoose.model("BudgetUser", UserSchema)