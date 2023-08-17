const Helper = require('../../util/Helper')

const { default: mongoose } = require('mongoose');
const userSchema = require('../BudgetUser')
const recordSchema = require('../Record')

module.exports = function(Schema) {
  
    Schema.post('save', async function(doc, next) {
      const userId = this.user.toString()

      const user = await userSchema.findById(userId)
      const records = await mongoose.model('Record').find({user: userId}).select(['account', 'amount', 'type'])

      const { expenses, income, transfers } = Helper.deconstructArray(records)

      user.income = income
      user.expenses = expenses
      user.transfers = transfers

      user.save()

      next();
    });
  };