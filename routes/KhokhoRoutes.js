const router = require('express').Router()
const khoController = require('../controllers/KhokhoController')
const khokhoModel = require('../models/KhokhoModel')
const matchController = require('../controllers/MatchController')

//API
router.post("/khokho",khoController.addMatch)
router.get("/khokho/ongoing",(req, res) => matchController.getongoingMatches(req, res, khokhoModel))
router.get("/khokho/upcoming",(req, res) => matchController.getUpComingMatches(req, res, khokhoModel))
router.get("/khokho/played",(req, res) => matchController.getPlayedMatches(req, res, khokhoModel))
router.put("/khokho/transfer/ongoing/:id",(req, res) => matchController.transferMatchtoOngoing(req, res, khokhoModel))
router.put("/khokho/transfer/played/:id",(req, res) => matchController.transferMatchestoPlayed(req, res, khokhoModel))

module.exports = router