import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';

let setSideRailType = (type, api) => {
    setConfigKeyValuePair('sideRail', type, api);
};

export {
    setSideRailType,
};
