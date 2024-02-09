const cricketModel = require('../models/CricketModel')

const addMatch = async (req, res) => {
    console.log("reached cricket match");
    const matchData = {
        player1: req.body.player1,
        player2: req.body.player2,
        winner: null,
        status: 0
    }

    try {
        const match = new cricketModel(matchData)
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