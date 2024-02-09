const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cricketSchema = new Schema({
    player1: {
        type: String
    },
    player2: {
        type: String
    },
    winner: {
        type: String
    },
    status: {
        type: Number
    }
})

module.exports = mongoose.model("cricket", cricketSchema)