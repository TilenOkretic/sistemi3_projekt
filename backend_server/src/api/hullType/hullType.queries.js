const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 'id', 'name' ];

module.exports = {
    findAll() {
        return db(tableNames.hullType).select(fields);
    },
    async find(name) {
        const [ hullType ] = await db(tableNames.hullType)
            .select(fields)
            .where({
                name
            });
        return hullType;
    },
    async get(id) {
        const [ hullType ] = await db(tableNames.hullType)
            .select(fields)
            .where({
                id
            });
        return hullType;
    }
};
