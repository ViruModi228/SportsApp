const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carromSchema = new Schema({
    player1: {
        type: String
    },
    player2: {
        type: String
    },
    player3: {
        type: String
    },
    player4: {
        type: String
    },
    winner: {
        type: String
    },
    status: {
        type: Number
    }
})

module.exports = mongoose.model("carrom", carromSchema)