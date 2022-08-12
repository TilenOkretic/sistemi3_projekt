import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getOutboardMotorCount = (api) => getConfigFromKey('outboardMotorCount', api);

let getInboardMotorCount = (api) => getConfigFromKey('inboardMotorCount', api);

let getElectricInboardEngineCount = (api) => getConfigFromKey('electricInboardEngineCount', api);

let getElectricOutboardEngineCount = (api) => getConfigFromKey('electricOutboardEngineCount', api);

let getThrottleCount = (api) => getConfigFromKey('throttle', api);

let getHullType = (api) => getConfigFromKey('hullType', api);

let getHasOutboardMotor = (api) => getConfigFromKey('outboardMotor', api);

let getHasInboardMotor = (api) => getConfigFromKey('inboardMotor', api);

let getHasElectricPropulsion = (api) => getConfigFromKey('electricPropulsion', api);

let getHasMotorPropulsion = (api) => getConfigFromKey('motorPropulsion', api);

let getIsHullElectric = (api) => getHullType(api) == 'electric';

let getIsHullMotor = (api) => getHullType(api) == 'motor';

export {
    getOutboardMotorCount,
    getInboardMotorCount,
    getElectricInboardEngineCount,
    getElectricOutboardEngineCount,
    getThrottleCount,
    getHullType,
    getHasOutboardMotor,
    getHasInboardMotor,
    getHasElectricPropulsion,
    getHasMotorPropulsion,
    getIsHullElectric,
    getIsHullMotor,
};
