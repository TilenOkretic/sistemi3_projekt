import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';

let setHullType = (type, api) => {
    setConfigKeyValuePair('hullType', type, api);
};

let setHasElectricPropulsion = (electricPropulsion, api) => {
    setConfigKeyValuePair('electricPropulsion', electricPropulsion, api);
};

let setHasMotorPropulsion = (motorPropulsion, api) => {
    setConfigKeyValuePair('motorPropulsion', motorPropulsion, api);
};

let setHasOutboardMotor = (hasOutboardMotor, api) => {
    setConfigKeyValuePair('outboardMotor', hasOutboardMotor, api);
};

let setHasInboardMotor = (hasInboardMotor, api) => {
    setConfigKeyValuePair('inboardMotor', hasInboardMotor, api);
};

let setMotorThrottle = (count, api) => {
    let tcount = count == 1 ? 'single' : 'dual';
    setThrottleCount(tcount, api);
};

let setThrottleCount = (throttle, api) => {
    setConfigKeyValuePair('throttle', throttle, api);
};

let setOutboardMotorCount = (count, api) => {
    setConfigKeyValuePair('outboardMotorCount', count, api);
};

let setInboardMotorCount = (count, api) => {
    setConfigKeyValuePair('inboardMotorCount', count, api);
};

let setElectricInboardEngineCount = (count, api) => {
    setConfigKeyValuePair('electricInboardEngineCount', count, api);
};


let setElectricOutboardEngineCount = (count, api) => {
    setConfigKeyValuePair('electricOutboardEngineCount', count, api);
};

export {
    setHullType,
    setHasElectricPropulsion,
    setHasMotorPropulsion,
    setHasOutboardMotor,
    setHasInboardMotor,
    setMotorThrottle,
    setThrottleCount,
    setOutboardMotorCount,
    setInboardMotorCount,
    setElectricInboardEngineCount,
    setElectricOutboardEngineCount,
};
