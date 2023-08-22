const Record = require('../models/Record')
const Goal = require('../models/Goal')
const Account = require('../models/Account')
const User = require('../models/BudgetUser')

module.exports.anyFieldEmpty = async (dataObj) => {
    let dataArr = Object.values(dataObj)
    return dataArr.some(item => !item)
}

module.exports.documentTypes = {
    "record": Record,
    "goal": Goal,
    "account": Account,
    "current": User
}

const sumArray = (arrayObject) => {
    return arrayObject.reduce((sum, item) => sum + item.amount, 0)
}

const filterIncluding = (arrayObject, target) => {
    return arrayObject.filter((item) => item.type.toLowerCase() === target.toLowerCase())
}

module.exports.deconstructArray = (recordArray) => {
    let expenses = filterIncluding(recordArray, 'expense')
    let income = filterIncluding(recordArray, 'income')
    let transfers = filterIncluding(recordArray, 'transfer')

    expenses = sumArray(expenses)
    income = sumArray(income)
    transfers = sumArray(transfers)

    return { expenses, income, transfers }
}

