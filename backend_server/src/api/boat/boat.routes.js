const express = require('express');
// const RoofSolution = require('./roofSolution.model');

const router = express.Router();

const boatQueries = require('./boat.queries');

let getRoofSolutionId = require('../roofSolution/getters');
let getHullAndMotorizationId = require('../hullAndMotorization/getters');
let getExtraEquipmentId = require('../extraEquipment/getters');
let getCockpitLayoutId = require('../cockpitLayout/getters');
let getPlatformId = require('../platform/getters');
let getTapestryId = require('../tapestry/getters');
let getColorId = require('../color/getters');

router.get('/', async (req, res, next) => {
    let allBoats = await boatQueries.findAll();
    res.json(allBoats);
});

// TODO: validation
router.post('/', async (req, res, next) => {
    console.log('req', req.body);
    let boat = await boatQueries.findAll();
    let newBoat = {};

    newBoat.roof_solution_id = await getRoofSolutionId(req.body.roofColor, req.body.roofType);
  
    newBoat.hull_and_motorization_id = await getHullAndMotorizationId(req.body.hullType, req.body.motorization);

    newBoat.extra_equipment_id = await getExtraEquipmentId(req.body.extraEquipment);

    newBoat.cockpit_layout_id = await getCockpitLayoutId(req.body.cockpitLayout);

    newBoat.upholstery_inner_id = await getTapestryId(req.body.upholsteryInnerName);

    newBoat.upholstery_outer_id = await getTapestryId(req.body.upholsteryOuterName);

    newBoat.deck_color_id = await getColorId(req.body.deckColor);

    newBoat.hull_color_id = await getColorId(req.body.hullColor);

    newBoat.platform_id = await getPlatformId(req.body.platform);

    console.log(newBoat);

    let result = await boatQueries.insert(newBoat);
    res.json(result);
});

module.exports = router;
