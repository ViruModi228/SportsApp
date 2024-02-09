const fixtureController = require('../controllers/FixtureUploadController');

const router = require('express').Router();
router.post('/upload', fixtureController.uploadFile);
module.exports = router;