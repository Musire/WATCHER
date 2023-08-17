const { default: mongoose } = require('mongoose')
const BudgetUser = require('../models/BudgetUser')
const ValidationController = require('./ValidationController')


module.exports.register_user = async (req, res) => {
    const anyEmpty = ValidationController.anyFieldEmpty(req.body)

    if (anyEmpty) {
        console.log('error with req.body')
        return res.json({err: 'error with empty fields'})
    }

    const newUser = new BudgetUser(req.body)

    newUser.save()
        .then(console.log('saved new user'))
        .catch(err => console.log(err))
}

module.exports.login_user = async (req, res) => {

}

module.exports.fetch_user = async (req, res) => {
    console.log()
    res.json({msg: 'successful from fetching user'})
}

module.exports.fetch_current = async (req, res) => {
    const targetId = req.query.user // pull targetId from the query in the request object
    let user = await BudgetUser.find({_id: targetId}).select(['income', 'transfers', 'expenses']) // async user request
    user = user[0] // set the user to the first in the user list returned
    let grandTotal = (user.income - (user.expenses + user.transfers)) // sum of the income and expenses + transfers
    res.json({total: grandTotal})
}
