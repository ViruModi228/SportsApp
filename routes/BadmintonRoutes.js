const router = require('express').Router()
const badmintonController = require('../controllers/BadmintonController')
const badmintonModel = require('../models/BadmintonModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/badminton",badmintonController.addMatch)
router.get("/badminton/ongoing",(req, res) => matchController.getongoingMatches(req, res, badmintonModel))
router.get("/badminton/upcoming",(req, res) => matchController.getUpComingMatches(req, res, badmintonModel))
router.get("/badminton/played",(req, res) => matchController.getPlayedMatches(req, res, badmintonModel))
router.put("/badminton/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, badmintonModel))
router.put("/badminton/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, badmintonModel))

module.exports = router