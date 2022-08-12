import { getConfigFromKey } from '../../../../sketchfab_webpack_engine/config';

let getIsPlatformVisible = (api) => getConfigFromKey('platformVisible', api);

export {
    getIsPlatformVisible,
};
