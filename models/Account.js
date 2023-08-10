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
    }
  });

module.exports = Account = mongoose.model("Account", AccountSchema)