const express = require('express');
const distributorQueries = require('./distributor.queries');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let distributor = await distributorQueries.findAll();
        res.json(distributor);
    } catch(error) {
        next(error);
    }
});

router.get('/:countryCode', async (req, res, next) => {
    try {
        let distributor = await distributorQueries.find(req.params.countryCode);
        if (!distributor) {
            res.status(404).send('Distributor not found');    
        }
        res.json(distributor);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
