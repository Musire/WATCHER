const userSchema = require('../BudgetUser')

module.exports = function(Schema) {
  
    Schema.post('save', async function(doc, next) {

      let user = await userSchema.findOne({ user: userId })

      user.income += this.income
      user.income += this.income
      user.income += this.income

      user.save()

      next();
    });
  };