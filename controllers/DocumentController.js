const { json } = require('body-parser')
const Helper = require('../util/Helper')
const MongooseMethods = require('../util/MongooseMethods')

module.exports.fetch_document = async (req, res) => {
    const doc = req.params.document
    const Schema = Helper.documentTypes[doc]
    const user = req.body.id
    console.log('fetched documents')
    res.json(await MongooseMethods.fetchSortedRecords(Schema, user))
}

module.exports.fetch_single_document = async (req, res) => {
    try {
        let doc = req.params.document
        let schema = Helper.documentTypes[doc]
        let user = req.body.id

        const payload = await MongooseMethods.fetchSingleRecord(schema, user)

        res.status(200).json(payload)
    } catch (error) {
        console.log('Error', error)
        res.status(400).json({error})
    }
}

module.exports.create_document = async (req, res) => {
    const anyEmpty = await Helper.anyFieldEmpty(req.body)

    if (anyEmpty) {
        return res.status(400).json({msg: "missing or invalid data"})
    }

    console.log(req.body)

    const doc = req.params.document
    Schema = Helper.documentTypes[doc]

    await MongooseMethods.saveNewRecord(Schema, req.body)
    return res.status(200).json({msg: 'new record created'})
}

module.exports.edit_document = async (req, res) => {

}

module.exports.delete_document = async (req, res) => {
    const doc = req.params.document
    Schema = Helper.documentTypes[doc]
    await MongooseMethods.deleteRecord(Schema, req.body.recordID)
}

