const hullTypeQueries = require('../../hullType/hullType.queries');
const motorizationQueries = require('../../motoriaztion/motorization.queries');
const hullAndMotorizationQueries = require('../hullAndMotorization.queries');

module.exports = getHullAndMotorizationId = async (hullType, motorization) => {
    let { id: htid } = await hullTypeQueries.find(hullType); 
    let { id: mid } = await motorizationQueries.find(motorization); 

    const { id } = await hullAndMotorizationQueries.find(htid, mid);
    return id;
};
