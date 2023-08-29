const accountMiddleware = require('./middleware/accountMiddleware')

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    account: {
        type: String,
        required: true
    },
    startingAmount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
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


AccountSchema.virtual('total').get(function () {
    return (this.income - (this.expenses + this.transfers) + this.startingAmount)
});

AccountSchema.set('toObject', { virtuals: true });
AccountSchema.set('toJSON', { virtuals: true });

accountMiddleware(AccountSchema)

module.exports = Account = mongoose.model("Account", AccountSchema)