const tapestryQueries = require('../tapestry.queries');

module.exports = getTapestryId = async (name) => {
    let { id } = await tapestryQueries.find(name);
    return id;
};
