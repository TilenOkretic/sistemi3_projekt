const tapestryQueries = require('../tapestry.queries');

module.exports = getTapestryId = async (name) => {
    console.log('t', name);
    let { id } = await tapestryQueries.find(name);
    return id;
};
