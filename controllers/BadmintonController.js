const badmintonModel = require('../models/BadmintonModel')

const addMatch = async (req,res)=>{
    console.log("reached badminton match..")
    // console.log(req)
    const matchData = {
        player1 : req.body.player1,
        player2 : req.body.player2,
        player1Sets : [0,0,0],
        player2Sets : [0,0,0],
        winner : null,
        status : 0       // 0-> upcoming 1-> ongoing 2-> played
    }

    try {
        const match = new badmintonModel(matchData);
        const savedMatch = await match.save();
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
    } catch (err) {
        res.status(500).json({
            message: "error in database",
            error: err
        })
    }
}


module.exports = {
    addMatch
}