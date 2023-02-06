/* eslint-disable camelcase */
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
    let boat = await boatQueries.findAll();
    let newBoat = {};

    newBoat.roofSolutionId = await getRoofSolutionId(req.body.roofColor, req.body.roofType);
  
    newBoat.hullAndMotorizationId = await getHullAndMotorizationId(req.body.hullType, req.body.motorization);

    newBoat.extraEquipmentId = await getExtraEquipmentId(req.body.extraEquipment);

    newBoat.cockpitLayoutId = await getCockpitLayoutId(req.body.cockpitLayout);

    newBoat.upholsteryInnerId = await getTapestryId(req.body.innerCushioning);

    newBoat.upholsteryOuterId = await getTapestryId(req.body.outerCushioning);

    newBoat.deckColorId = await getColorId(req.body.deckColor);

    newBoat.hullColorId = await getColorId(req.body.hullColor);

    newBoat.platformId = await getPlatformId(req.body.platform);

    let result = await boatQueries.insert(newBoat);
    
    res.json(result);
});

module.exports = router;
