const router = require('express').Router()
const carromController = require('../controllers/CarromController')
const carromModel = require('../models/CarromModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/carrom",carromController.addMatch)
router.get("/carrom/ongoing",(req, res) => matchController.getongoingMatches(req, res, carromModel))
router.get("/carrom/upcoming",(req, res) => matchController.getUpComingMatches(req, res, carromModel))
router.get("/carrom/played",(req, res) => matchController.getPlayedMatches(req, res, carromModel))
router.put("/carrom/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, carromModel))
router.put("/carrom/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, carromModel))

module.exports = router