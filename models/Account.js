const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    account: {
        type: String,
        required: true
    },
    amount: {
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
        type: Number
    },
    expenses: {
        type: Number
    },
    transfers: {
        type: Number
    }
  });


AccountSchema.virtual('total').get(function () {
    return (this.income - (this.expenses + this.transfers))
});
  

module.exports = Account = mongoose.model("Account", AccountSchema)