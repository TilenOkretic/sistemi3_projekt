const express = require('express');
// const RoofSolution = require('./roofSolution.model');

const router = express.Router();

const colorQueries = require('../color/color.queries');
const roofTypeQueries = require('../roofType/roofType.queries');
const roofSolutionQueries = require('../roofSolution/roofSolution.queries');
const hullTypeQueries = require('../hullType/hullType.queries');
const motorizationQueries = require('../motoriaztion/motorization.queries');
const hullAndMotorizationQueries = require('../hullAndMotorization/hullAndMotorization.queries');
const extraEquipmentQueries = require('../extraEquipment/extraEquipment.queries');
const cockpitLayoutQueries = require('../cockpitLayout/cockpitLayout.queries');
const boatQueries = require('./boat.queries');
const tapestryQueries = require('../tapestry/tapestry.queries');
const platformQueries = require('../platform/platform.queries');

router.get('/', async (req, res, next) => {
    let boat = await boatQueries.findAll();
    let newBoat = {};

    let { colorName, roofTypeName } = req.body;

    let { id: cid } = await colorQueries.find(colorName); 
    let { id: rid } = await roofTypeQueries.find(roofTypeName); 

    const roofSolutions = await roofSolutionQueries.find(cid, rid);
    newBoat.roof_solution_id = roofSolutions.id;
  
    let { hullTypeName, motorizationName } = req.body;

    let { id: htid } = await hullTypeQueries.find(hullTypeName); 
    let { id: mid } = await motorizationQueries.find(motorizationName); 

    const hullAndMotorization = await hullAndMotorizationQueries.find(htid, mid);
    newBoat.hull_and_motorization_id = hullAndMotorization.id;

    const extraEquipment = await extraEquipmentQueries.insert({
        'rear_bench_configuration': 'rear bench',
        'table_configuration': 'deck table',
        'bow_sunbathing_cushions': 'bow sunbathing cushions',
    });

    newBoat.extra_equipment_id = extraEquipment[0].id;

    let layout = await cockpitLayoutQueries.find(req.body.cockpitLayout);
    newBoat.cockpit_layout_id = layout.id;

    let upholsteryInner = await tapestryQueries.find(req.body.upholsteryInnerName);
    newBoat.upholstery_inner_id = upholsteryInner.id;

    let upholsteryOuter = await tapestryQueries.find(req.body.upholsteryOuterName);
    newBoat.upholstery_outer_id = upholsteryOuter.id;

    let deckColor = await colorQueries.find(req.body.deckColor);
    newBoat.deck_color_id = deckColor.id;

    let hullColor = await colorQueries.find(req.body.hullColor);
    newBoat.hull_color_id = hullColor.id;

    let platform = await platformQueries.find(req.body.platform);
    newBoat.platform_id = platform.id;

    console.log(newBoat);

    let result = await boatQueries.insert(newBoat);
    res.json(result);
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
