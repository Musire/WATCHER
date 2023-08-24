const userSchema = require('../BudgetUser')

module.exports = function(Schema) {
  
    Schema.post('save', async function(doc, next) {
      let userId = this.user.toString()
      let user = await userSchema.findOne({ _id: userId })

      let isPresent = user.accounts.includes(this._id)

      if (!isPresent) {
        user.accounts.push(this._id)
      }

      user.save()

      next();
    });
  };