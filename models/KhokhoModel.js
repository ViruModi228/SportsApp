const mongoose = require('mongoose')
const Schema = mongoose.Schema

const khokhoSchema = new Schema({
    team1: {
        type: String
    },
    team2: {
        type: String
    },
    team1Rounds: [Number], // Array to store player1's set-wise scores
    team2Rounds: [Number], 
    winner: {
        type: String
    },
    status: {
        type: Number
    }
})

module.exports = mongoose.model("khokho", khokhoSchema)