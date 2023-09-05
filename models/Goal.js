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
    target: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    paid: {
        type: Number,
        default: 0
    }
  });

GoalSchema.virtual('pending').get(function () {
    return (this.target - this.paid)
});

GoalSchema.virtual('percentage').get(function () {
    return ((this.paid / this.target) * 100).toFixed(2)
});

GoalSchema.set('toObject', { virtuals: true });
GoalSchema.set('toJSON', { virtuals: true });

module.exports = Goal = mongoose.model("Goal", GoalSchema)