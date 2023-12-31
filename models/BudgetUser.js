const userMiddleware = require('./middleware/userMiddleware')

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
    accounts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'accounts'
    }],
    date: {
      type: Date,
      default: Date.now
    },
    income: {
      type: Number,
      default: 0
    },
    expenses: {
      type: Number,
      default: 0
    },
    transfers: {
      type: Number,
      default: 0
    }
  });

UserSchema.virtual('total').get(function () {
    return (this.income - (this.expenses + this.transfers))
});

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

userMiddleware(UserSchema)

module.exports = BudgetUser = mongoose.model("BudgetUser", UserSchema)