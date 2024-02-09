const router = require('express').Router()
const kabaddiController = require('../controllers/KabaddiController')
const kabaddiModel = require('../models/KabaddiModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/kabaddi",kabaddiController.addMatch)
router.get("/kabaddi/ongoing",(req, res) => matchController.getongoingMatches(req, res, kabaddiModel))
router.get("/kabaddi/upcoming",(req, res) => matchController.getUpComingMatches(req, res, kabaddiModel))
router.get("/kabaddi/played",(req, res) => matchController.getPlayedMatches(req, res, kabaddiModel))
router.put("/kabaddi/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, kabaddiModel))
router.put("/kabaddi/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, kabaddiModel))

module.exports = router