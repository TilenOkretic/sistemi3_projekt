const colorQueries = require('../color.queries');

module.exports = getColorId = async (name) => {
    let { id } = await colorQueries.find(name);
    return id;
};
