import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getHasExtraEquipment = (extraeq, api) => api.defaultConfig.extraEquipment[extraeq] != null;

let getSteeringWheelType = (api) => getConfigFromKey('steeringWheel', api);

let getHasMiniCupHolder = (api) => getHasExtraEquipment('miniCupHolder', api);

let getHasAdditionalStorage = (api) => getHasExtraEquipment('additionalStorage', api);

let getHasMarineCarpet = (api) => getHasExtraEquipment('marineCarpet', api);

let getHasGalleyKitchen = (api) => getHasExtraEquipment('galleyKitchen', api);

let getHasRearBench = (api) => getHasExtraEquipment('rearBench', api);

let getHasWindshield = (api) => getHasExtraEquipment('windshield', api);

let getHasDeckTable = (api) => getHasExtraEquipment('deckTable', api);

let getHasBowCushioning = (api) => getHasExtraEquipment('bowCushioning', api);

let getHasFrontGuardRail = (api) => getHasExtraEquipment('frontGuardRail', api);

let getHasSunbedTent = (api) => getHasExtraEquipment('sunbedTent', api);

export {
    getHasExtraEquipment,
    getSteeringWheelType,
    getHasMiniCupHolder,
    getHasAdditionalStorage,
    getHasMarineCarpet,
    getHasGalleyKitchen,
    getHasRearBench,
    getHasWindshield,
    getHasDeckTable,
    getHasBowCushioning,
    getHasFrontGuardRail,
    getHasSunbedTent,
};
