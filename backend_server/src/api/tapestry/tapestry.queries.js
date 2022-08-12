const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 'id', 'name' ];

module.exports = {
    findAll() {
        return db(tableNames.tapestry).select(fields);
    },
    async find(name) {
        const [ tapestry ] = await db(tableNames.tapestry)
            .select(fields)
            .where({
                name
            });
        return tapestry;
    },
    async get(id) {
        const [ tapestry ] = await db(tableNames.tapestry)
            .select(fields)
            .where({
                id
            });
        return tapestry;
    }
};
