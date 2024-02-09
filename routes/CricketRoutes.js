const router = require('express').Router()
const cricketController = require('../controllers/CricketController')
const cricketModel = require('../models/CricketModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/cricket",cricketController.addMatch)
router.get("/cricket/ongoing",(req, res) => matchController.getongoingMatches(req, res, cricketModel))
router.get("/cricket/upcoming",(req, res) => matchController.getUpComingMatches(req, res, cricketModel))
router.get("/cricket/played",(req, res) => matchController.getPlayedMatches(req, res, cricketModel))
router.put("/cricket/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, cricketModel))
router.put("/cricket/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, cricketModel))

module.exports = router