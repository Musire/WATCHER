
module.exports.saveNewRecord = async (Schema, data) => {
    const newRecord = new Schema(data)
    await newRecord.save()
        .then(console.log('saved new document'))
        .catch(err => console.log(err))
}

module.exports.deleteRecord = async (Schema, targetID) => {
    await Schema.findOneAndDelete({_id: targetID})
        .then(console.log('error successfull'))
        .catch(err => {
            if (err) { console.log(err)}
        })
}

module.exports.fetchSortedRecords = async (Schema, targetID) => {
    return await Schema.find({user: targetID}).sort({ date: 1 }) 
}
