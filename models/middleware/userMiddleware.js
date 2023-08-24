const { default: mongoose } = require("mongoose");
module.exports = function(Schema) {
  
    Schema.pre('save', async function(doc) {
        let income = 0 
        let expenses = 0
        let transfers = 0

        let accounts = this.accounts

        for (let account of accounts) {
            const accountDoc = await mongoose.model('Account').findOne({_id: account })
            income += ( accountDoc.income + accountDoc.startingAmount )
            expenses += accountDoc.expenses
            transfers += accountDoc.transfers
        }

        this.income = income
        this.expenses = expenses
        this.transfers = transfers

    });
  };