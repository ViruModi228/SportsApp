
const getongoingMatches = async (req,res,model) =>{
    console.log("ongoing matches reached..... ",model);
    try {
        const ongoingMatches = await model.find({ status: 1 });
        if (ongoingMatches){
            res.status(200).json({
                message: "ongoing matches fetched successfully",
                data: ongoingMatches,
            });
        } else {
            res.status(400).json({
                message: "ongoing matches not fetched",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "error",
            error: err,
        });
    }
}

const getUpComingMatches = async (req,res,model) =>{
    console.log("upcoming matches reached..... ",model);
    try {
        const upComingMatches = await model.find({ status: 0 });
        if (upComingMatches) {
            res.status(200).json({
                message: "upComing matches fetched successfully",
                data: upComingMatches,
            });
        } else {
            res.status(400).json({
                message: "upcoming matches not fetched",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "error",
            error: err,
        });
    }
}

const getPlayedMatches = async (req,res,model) =>{
    console.log("played matches reached..... ",model);
    try {
        const playedMatches = await model.find({ status: 2 });
        if (playedMatches) {
            res.status(200).json({
                message: "played matches fetched successfully",
                data: playedMatches,
            });
        } else {
            res.status(400).json({
                message: "played matches not fetched",
                data:playedMatches
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "error",
            error: err,
        });
    }
}

const transferMatchtoOngoing = async (req,res,model) =>{
    console.log("transfer matches to ongoing reached..... ",model);
    try {
        const transferMatches = await model.findByIdAndUpdate(req.params.id,{status:1});
        if (transferMatches) {
            res.status(200).json({
                message: "tranfered matches to ongoing successfully",
                data: transferMatches,
            });
        } else {
            res.status(400).json({
                message: "transfer matches failed",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "error",
            error: err,
        });
    }
}

const transferMatchestoPlayed = async (req,res,model) =>{
    console.log("transfer matches to ongoing reached..... ",model);
    try {
        const transferMatches = await model.findByIdAndUpdate(req.params.id,{status:2});
        if (transferMatches) {
            res.status(200).json({
                message: "tranfered matches to played successfully",
                data: transferMatches,
            });
        } else {
            res.status(400).json({
                message: "transfer matches failed",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "error",
            error: err,
        });
    }
}
module.exports = {
    getongoingMatches,
    getUpComingMatches,
    getPlayedMatches,
    transferMatchtoOngoing,
    transferMatchestoPlayed
}