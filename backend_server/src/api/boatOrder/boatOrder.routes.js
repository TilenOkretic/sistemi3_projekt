const express = require('express');
const boatQueries = require('../boat/boat.queries');

const router = express.Router();

let getRoofSolutionId = require('../roofSolution/getters');
let getHullAndMotorizationId = require('../hullAndMotorization/getters');
let getExtraEquipmentId = require('../extraEquipment/getters');
let getCockpitLayoutId = require('../cockpitLayout/getters');
let getPlatformId = require('../platform/getters');
let getTapestryId = require('../tapestry/getters');
let getColorId = require('../color/getters');
const { getOrderId } = require('./boatOrder.utils');

// TODO: handle boat order UPDATING
router.post('/', async (req, res, next) => {
    console.log(req.body);
    let newBoat = {};

    newBoat.roof_solution_id = await getRoofSolutionId(req.body.roofColor, req.body.roofType);
  
    newBoat.hull_and_motorization_id = await getHullAndMotorizationId(req.body.hullType, req.body.motorization);

    newBoat.extra_equipment_id = await getExtraEquipmentId(req.body.extraEquipment);

    newBoat.cockpit_layout_id = await getCockpitLayoutId(req.body.cockpitLayout);

    newBoat.upholstery_inner_id = await getTapestryId(req.body.innerCushioning);

    newBoat.upholstery_outer_id = await getTapestryId(req.body.outerCushioning);

    newBoat.deck_color_id = await getColorId(req.body.deckColor);

    newBoat.hull_color_id = await getColorId(req.body.hullColor);

    newBoat.platform_id = await getPlatformId(req.body.platform);

    let result = await boatQueries.insert(newBoat);
    console.log(result);
    
    res.json({
        msg: `Boat configuration mail sent. Your order ID is: ${getOrderId(req.body)}`,
    });

});

module.exports = router;
