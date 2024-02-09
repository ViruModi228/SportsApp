const router = require('express').Router()
const tabletennisController = require('../controllers/TabletennisController')
const tabletennisModel = require('../models/TableTennisModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/tabletennis",tabletennisController.addMatch)
router.get("/tabletennis/ongoing",(req, res) => matchController.getongoingMatches(req, res, tabletennisModel))
router.get("/tabletennis/upcoming",(req, res) => matchController.getUpComingMatches(req, res, tabletennisModel))
router.get("/tabletennis/played",(req, res) => matchController.getPlayedMatches(req, res, tabletennisModel))
router.put("/tabletennis/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, tabletennisModel))
router.put("/tabletennis/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, tabletennisModel))

module.exports = router