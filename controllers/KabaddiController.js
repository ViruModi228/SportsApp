const kabaddiModel = require('../models/KabaddiModel')

const addMatch = async (req,res)=>{
    console.log("reached kabaddi match..")
    // console.log(req)
    const matchData = {
        team1 : req.body.team1,
        team2 : req.body.team2,
        team1Rounds : [0,0,0],
        team2Rounds : [0,0,0],
        winner : null,
        status : 0       // 0-> upcoming 1-> ongoing 2-> played
    }

    try {
        const match = new kabaddiModel(matchData);
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