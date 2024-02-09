const mongoose = require('mongoose');
const Schema = mongoose.Schema

const coordinatorSchema = new Schema({
    id: {
        type: String
    },
    password:{
        type:String
    },
    sport:{
        type:String
    }
})

module.exports = mongoose.model("coordinator", coordinatorSchema)