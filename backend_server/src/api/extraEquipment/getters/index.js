const extraEquipmentQueries = require('../extraEquipment.queries');

// TODO: make this a createExtraEquipment function or find a better way of handling this 
module.exports = getExtraEquipmentId = async (extraEquipment) => {
    const res = await extraEquipmentQueries.insert(extraEquipment);
    return res[0].id;
};
