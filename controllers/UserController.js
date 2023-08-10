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
