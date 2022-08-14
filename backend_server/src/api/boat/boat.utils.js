const getRoofSolutionId = require('../roofSolution/getters');
const getHullAndMotorizationId = require('../hullAndMotorization/getters');
const getExtraEquipmentId = require('../extraEquipment/getters');
const getCockpitLayoutId = require('../cockpitLayout/getters');
const getPlatformId = require('../platform/getters');
const getTapestryId = require('../tapestry/getters');
const getColorId = require('../color/getters');

let createNewBoatObject = async (data) => {
    let newBoat = {};

    const {
        roofColor,
        roofType,
        hullType,
        motorization,
        extraEquipment,
        cockpitLayout,
        innerCushioning,
        outerCushioning,
        deckColor,
        hullColor,
        platform,
    } = data;

    newBoat.roof_solution_id = await getRoofSolutionId(roofColor, roofType);
  
    newBoat.hull_and_motorization_id = await getHullAndMotorizationId(hullType, motorization);

    newBoat.extra_equipment_id = await getExtraEquipmentId(extraEquipment);

    newBoat.cockpit_layout_id = await getCockpitLayoutId(cockpitLayout);

    newBoat.upholstery_inner_id = await getTapestryId(innerCushioning);

    newBoat.upholstery_outer_id = await getTapestryId(outerCushioning);

    newBoat.deck_color_id = await getColorId(deckColor);

    newBoat.hull_color_id = await getColorId(hullColor);

    newBoat.platform_id = await getPlatformId(platform);

    return newBoat;
};

module.exports = {
    createNewBoatObject,
};
