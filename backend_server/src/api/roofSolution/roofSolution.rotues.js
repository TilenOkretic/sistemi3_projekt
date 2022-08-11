const express = require('express');
const RoofSolution = require('./roofSolution.model');

const router = express.Router();

const colorQueries = require('../color/color.queries');

router.get('/', async (req, res, next) => {
    const roofSolutions = await RoofSolution.query(); 
    res.json(roofSolutions);
});

router.post('/', async (req, res, next) => {
    const color = await colorQueries.find('dark anthracite');

    const roofSolution = await RoofSolution.
        query()
        .insert({
            'color_id': color.id,
            'roof_type_id': 1,
        });
    res.json(roofSolution);
});

module.exports = router;
