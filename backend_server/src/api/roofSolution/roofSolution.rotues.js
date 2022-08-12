const express = require('express');
const RoofSolution = require('./roofSolution.model');

const router = express.Router();

const colorQueries = require('../color/color.queries');
const roofTypeQueries = require('../roofType/roofType.queries');

router.get('/', async (req, res, next) => {
    res.json('depricated');
});

router.post('/', async (req, res, next) => {
    const color = await colorQueries.find('dark anthracite');
    const roofType = await roofTypeQueries.find('t-top');

    const roofSolution = await RoofSolution.
        query()
        .insert({
            'color_id': color.id,
            'roof_type_id': roofType.id,
        });
    res.json(roofSolution);
});

module.exports = router;
