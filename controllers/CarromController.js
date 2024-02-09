const carromModel = require('../models/CarromModel')

const addMatch = async (req, res) => {
    console.log("reached carrom match");
    const matchData = {
        player1: req.body.player1,
        player2: req.body.player2,
        player3: req.body.player3,
        player4: req.body.player4,
        winner: null,
        status: 0
    }

    try {
        const match = new carromModel(matchData)
        const savedMatch = await match.save()

        if (savedMatch) {
            res.status(200).json({
                message: "match Successfully added!",
                data: savedMatch
            });
        } else {
            res.status(400).json({
                message: "match not added"
            })
        }
    } catch (error) {
        res.status(500).json({
            error: "error in database",
            err: error
        })
    }
}

module.exports ={
    addMatch
}