const express = require('express');
const router = express.Router();
const dictionaryController = require('../controllers/dictionaryController');

router.get('/', dictionaryController.getAllTerms);
router.get('/search', dictionaryController.searchTerms);
router.post('/', dictionaryController.createTerm);

module.exports = router;
