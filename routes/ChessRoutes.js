const router = require('express').Router()
const chessController = require('../controllers/ChessController')
const chessModel = require('../models/ChessModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/chess",chessController.addMatch)
router.get("/chess/ongoing",(req, res) => matchController.getongoingMatches(req, res, chessModel))
router.get("/chess/upcoming",(req, res) => matchController.getUpComingMatches(req, res, chessModel))
router.get("/chess/played",(req, res) => matchController.getPlayedMatches(req, res, chessModel))
router.put("/chess/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, chessModel))
router.put("/chess/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, chessModel))

module.exports = router