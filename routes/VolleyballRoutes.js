const router = require('express').Router()
const volleyballController = require('../controllers/VolleyballController')
const volleyballModel = require('../models/VolleyballModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/volleyball",volleyballController.addMatch)
router.get("/volleyball/ongoing",(req, res) => matchController.getongoingMatches(req, res, volleyballModel))
router.get("/volleyball/upcoming",(req, res) => matchController.getUpComingMatches(req, res, volleyballModel))
router.get("/volleyball/played",(req, res) => matchController.getPlayedMatches(req, res, volleyballModel))
router.put("/volleyball/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, volleyballModel))
router.put("/volleyball/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, volleyballModel))

module.exports = router