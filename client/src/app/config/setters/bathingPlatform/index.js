import { setConfigKeyValuePair } from '../../../../sketchfab_webpack_engine/config';

let setPlatformVisible = (platformVisible, api) => {
    setConfigKeyValuePair('platformVisible', platformVisible, api);
};

export {
    setPlatformVisible,
};
