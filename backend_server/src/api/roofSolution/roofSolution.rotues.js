const express = require('express');
const RoofSolution = require('./roofSolution.model');

const router = express.Router();

const colorQueries = require('../color/color.queries');
const roofTypeQueries = require('../roofType/roofType.queries');
const roofSolutionQueries = require('./roofSolution.queries');
const hullTypeQueries = require('../hullType/hullType.queries');
const motorizationQueries = require('../motoriaztion/motorization.queries');
const hullAndMotorizationQueries = require('../hullAndMotorization/hullAndMotorization.queries');
const extraEquipmentQueries = require('../extraEquipment/extraEquipment.queries');
const cockpitLayoutQueries = require('../cockpitLayout/cockpitLayout.queries');

router.get('/', async (req, res, next) => {
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
