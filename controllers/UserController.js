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

    const newUser = new BudgetUser({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email

    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });

    
}

module.exports.login_user = async (req, res) => {
    const anyEmpty = await Helper.anyFieldEmpty(req.body)

    if (anyEmpty) {
        console.log('error with req.body')
        return res.json({err: 'error with empty fields'})
    }

    let { username, password } = req.body

    try {
        const user = await BudgetUser.find({username: username})

        if (!user.length) {
            console.log('user not found')
            return res.status(208).json({msg: 'user not found'})
        }

        bcrypt.compare(password, user[0].password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user._id, name: user.username }

                jwt.sign(payload, secretKey, { expiresIn: 31556926 }, (err, token) => {
                    res.json({user: user, token: "Bearer " + token})
                }) 
            } else {
                return res.status(400).json({msg: "password incorrect"})
            }
        })

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
    const targetId = req.query.user // pull targetId from the query in the request object
    let user = await BudgetUser.find({_id: targetId}).select(['income', 'transfers', 'expenses']) // async user request
    user = user[0] // set the user to the first in the user list returned
    let grandTotal = (user.income - (user.expenses + user.transfers)) // sum of the income and expenses + transfers
    res.json({total: grandTotal})
}
