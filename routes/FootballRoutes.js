const router = require('express').Router()
const footballController = require('../controllers/FootballController')
const footballModel = require('../models/FootballModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/football",footballController.addMatch)
router.get("/football/ongoing",(req, res) => matchController.getongoingMatches(req, res, footballModel))
router.get("/football/upcoming",(req, res) => matchController.getUpComingMatches(req, res, footballModel))
router.get("/football/played",(req, res) => matchController.getPlayedMatches(req, res, footballModel))
router.put("/football/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, footballModel))
router.put("/football/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, footballModel))

module.exports = router