
module.exports.saveNewRecord = async (Schema, data) => {
    try {
        const newRecord = new Schema(data)
        await newRecord.save()
        console.log('saved new document')
    } catch (error) {
        console.log('Error', error)
    }
}

module.exports.deleteRecord = async (Schema, targetID) => {
    try {
        await Schema.findOneAndDelete({_id: targetID})
        console.log('error successfull')
    } catch (error) {
        console.log('Error', error)
    }
}

module.exports.fetchSortedRecords = async (Schema, targetID) => {
    try {
        return await Schema.find({user: targetID}).sort({ date: 1 })
    } catch (error) {
        console.log('Error', error)
    }
     
}

module.exports.fetchSingleRecord = async (Schema, targetID) => {
    try {
        return await Schema.findOne({_id: targetID})
    } catch (error) {
        console.log("error", error)
    }
}