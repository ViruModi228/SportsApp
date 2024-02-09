const router = require('express').Router()
const towController = require('../controllers/TOWController')
const towModel = require('../models/TOWModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/tugofwar",towController.addMatch)
router.get("/tugofwar/ongoing",(req, res) => matchController.getongoingMatches(req, res, towModel))
router.get("/tugofwar/upcoming",(req, res) => matchController.getUpComingMatches(req, res, towModel))
router.get("/tugofwar/played",(req, res) => matchController.getPlayedMatches(req, res, towModel))
router.put("/tugofwar/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, towModel))
router.put("/tugofwar/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, towModel))

module.exports = router