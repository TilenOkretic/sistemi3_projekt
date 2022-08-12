import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getSideRailType = (api) => getConfigFromKey('sideRail', api);

export {
    getSideRailType,
};
