const accountSchema = require('../Account')
const goalSchema = require('../Goal')

module.exports = function(Schema) {
  
    Schema.post('save', async function(doc, next) {
      const userId = this.user.toString()
      const accountName = this.account.toString()
      const recordType = this.type.toString()

      let accountDoc = await accountSchema.findOne({
        user: userId,
        account: accountName
      })

      if (accountDoc) {
        accountDoc[recordType] += this.amount
        accountDoc.save() 
      }

      if (recordType.toLowerCase() !== "income") {
        let goalDoc = await goalSchema.findOne({user: userId, area: this.area.toLowerCase()})

        if (goalDoc) {
          goalDoc.paid += this.amount
          goalDoc.save()
        }
      }

      next();

    });
  };