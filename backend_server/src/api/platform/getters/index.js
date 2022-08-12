const platformQueries = require('../platform.queries');

module.exports = getPlatformId = async (name) => {
    let { id } = await platformQueries.find(name);
    return id;
};
