const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema({
    ifsc_code:String,
    bank_id:Number,
    branch:String,
    address:String,
    city:String,
    district:String,
    state:String,
    bank_name:String
})

module.exports = mongoose.model("banks",bankSchema)