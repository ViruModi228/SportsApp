const router = require('express').Router()
const satoliyaController = require('../controllers/SatoliyaController')
const satoliyaModel = require('../models/SatoliyaModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/satoliya",satoliyaController.addMatch)
router.get("/satoliya/ongoing",(req, res) => matchController.getongoingMatches(req, res, satoliyaModel))
router.get("/satoliya/upcoming",(req, res) => matchController.getUpComingMatches(req, res, satoliyaModel))
router.get("/satoliya/played",(req, res) => matchController.getPlayedMatches(req, res, satoliyaModel))
router.put("/satoliya/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, satoliyaModel))
router.put("/satoliya/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, satoliyaModel))

module.exports = router