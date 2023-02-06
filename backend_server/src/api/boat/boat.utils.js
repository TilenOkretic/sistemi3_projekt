/* eslint-disable camelcase */
const getRoofSolutionId = require('../roofSolution/getters');
const getHullAndMotorizationId = require('../hullAndMotorization/getters');
const getExtraEquipmentId = require('../extraEquipment/getters');
const getCockpitLayoutId = require('../cockpitLayout/getters');
const getPlatformId = require('../platform/getters');
const getTapestryId = require('../tapestry/getters');
const getColorId = require('../color/getters');

let createNewBoatObject = async (data, next) => {
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
    
    try {
        newBoat.roofSolutionId = await getRoofSolutionId(roofColor, roofType);
      
        newBoat.hullAndMotorizationId = await getHullAndMotorizationId(hullType, motorization);
    
        newBoat.extraEquipmentId = await getExtraEquipmentId(extraEquipment);
    
        newBoat.cockpitLayoutId = await getCockpitLayoutId(cockpitLayout);
    
        newBoat.upholsteryInnerId = await getTapestryId(innerCushioning);
    
        newBoat.upholsteryOuterId = await getTapestryId(outerCushioning);
    
        newBoat.deckColorId = await getColorId(deckColor);
    
        newBoat.hullColorId = await getColorId(hullColor);
    
        newBoat.platformId = await getPlatformId(platform);
        
        return newBoat;
    } catch (err) {
        console.error(err);
    }

};

module.exports = {
    createNewBoatObject,
};
