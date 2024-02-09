const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authSchema = new Schema({
    coordinator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'coordinators',
        required: true,
    },
    token:{
        type:String
    }
})

module.exports = mongoose.model("auth",authSchema)