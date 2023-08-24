const BudgetUser = require('../models/BudgetUser')
const Helper = require('../util/Helper')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

module.exports.register_user = async (req, res) => {
    const anyEmpty = await Helper.anyFieldEmpty(req.body)

    if (anyEmpty) {
        console.log('error with req.body')
        return res.json({err: 'error with empty fields'})
    }

    try {
        const user = await BudgetUser.findOne({username: req.body.username})

        if (user) {
            console.log("user already created")
            return res.status(208).json({msg: "user already created"})
        }

        let { username, password, email } = req.body
        const newUser = new BudgetUser({ username, password, email })

        bcrypt.genSalt(10)
            .then(salt => bcrypt.hash(newUser.password, salt))
            .then(hash => {
                newUser.password = hash;
                newUser.save().then(user => res.json(user))
            })
            .catch(err => {throw err})

        const salt = await bcrypt.genSalt(10)

    } catch (error) {
        throw error
    }
}

module.exports.login_user = async (req, res) => {
    const anyEmpty = await Helper.anyFieldEmpty(req.body)

    if (anyEmpty) {
        console.log('error with req.body')
        return res.status(208).json({err: 'error with empty fields'})
    }

    try {
        let { username, password } = req.body
        const user = await BudgetUser.findOne({username: username})

        if (!user) {
            console.log('user not found')
            return res.status(208).json({err: 'user not found'})
        }

        let isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const payload = { id: user._id, name: user.username }

            jwt.sign(payload, process.env.JWTSECRET, { expiresIn: 31556926 }, (err, token) => {
                return res.json({user: user, token: "Bearer " + token})
            }) 
        } else {
            console.log("password incorrect")
            return res.status(208).json({err: "password incorrect"})
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(400)
    }


}

module.exports.fetch_user = async (req, res) => {
    console.log()
    res.json({msg: 'successful from fetching user'})
}

module.exports.fetch_current = async (req, res) => {
    const targetId = req.body.id
    console.log(targetId)
    let user = await BudgetUser.findOne({_id: targetId}) 
    console.log(user)
    res.json({total: user.total})
}
