const accountSchema = require('../Account')

module.exports = function(Schema) {
  
    Schema.post('save', async function(doc, next) {
      const userId = this.user.toString()
      const accountName = this.account.toString()
      const recordType = this.type.toString()

      let accountDoc = await accountSchema.findOne({
        user: userId,
        account: accountName
      })

      console.log("user", accountDoc)

      if (!accountDoc) {
        return 
      }

      

      accountDoc[recordType] += this.amount
      accountDoc.save()

      next();
    });
  };