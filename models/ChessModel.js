const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chessSchema = new Schema({
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

module.exports = mongoose.model("chess", chessSchema)