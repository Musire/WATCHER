const Record = require('../models/Record')
const Goal = require('../models/Goal')
const Account = require('../models/Account')

module.exports.anyFieldEmpty = (dataObj) => {
    let dataArr = Object.values(dataObj)
    let isEmpty = dataArr.some(v => v === 0 || v === undefined || v === null || v === "")
    return isEmpty
}

module.exports.documentTypes = {
    "record": Record,
    "goal": Goal,
    "account": Account
}