const mongoose = require('mongoose')
const Schema = mongoose.Schema

const volleyballSchema = new Schema({
    player1: {
        type: String
    },
    player2: {
        type: String
    },
    player1Sets: [Number], // Array to store player1's set-wise scores
    player2Sets: [Number], 
    winner: {
        type: String
    },
    status: {
        type: Number
    }
})

module.exports = mongoose.model("volleyball", volleyballSchema)