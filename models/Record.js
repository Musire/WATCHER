const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    account: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
      type: String,
      required: true
    },
    area: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
  });

module.exports = Record = mongoose.model("Record", RecordSchema)