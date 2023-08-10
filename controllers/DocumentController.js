const Helper = require('../util/Helper')
const MongooseMethods = require('../util/MongooseMethods')

module.exports.create_document = async (req, res) => {
    
    const anyEmpty = Helper.anyFieldEmpty(req.body)

    if (anyEmpty) {
        console.log('error with req.body')
        return res.json({err: 'error with empty fields'})
    }

    const doc = req.params.document
    Schema = Helper.documentTypes[doc]

    MongooseMethods.saveNewRecord(Schema, req.body)
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
    Schema = Helper.documentTypes[doc]
    res.json(await MongooseMethods.fetchSortedRecords(Schema, req.body.userID))
}