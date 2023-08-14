const { Error } = require('mongoose')
const Helper = require('../util/Helper')
const MongooseMethods = require('../util/MongooseMethods')

module.exports.create_document = async (req, res) => {
    const anyEmpty = await Helper.anyFieldEmpty(req.body)

    if (anyEmpty) {
        return res.status(400).json({msg: "missing or invalid data"})
    } else {
        const doc = req.params.document
        Schema = Helper.documentTypes[doc]

        MongooseMethods.saveNewRecord(Schema, req.body)
        return res.status(200).json({msg: 'new record created'})
    }
    
}

module.exports.edit_document = async (req, res) => {

}

module.exports.delete_document = async (req, res) => {
    const doc = req.params.document
    Schema = Helper.documentTypes[doc]
    await MongooseMethods.deleteRecord(Schema, req.body.recordID)
}

module.exports.fetch_document = async (req, res) => {
    const doc = req.params.document
    const Schema = Helper.documentTypes[doc]
    const user = req.query.user
    console.log('fetched documents')
    res.json(await MongooseMethods.fetchSortedRecords(Schema, user))
}