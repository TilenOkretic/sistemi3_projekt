const cockpitLayoutQueries = require('../cockpitLayout.queries');

module.exports = getCockpitLayoutId = async (name) => {
    let { id } = await cockpitLayoutQueries.find(name);
    return id;
};
