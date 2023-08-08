const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
  });

module.exports = Goal = mongoose.model("Goal", GoalSchema)