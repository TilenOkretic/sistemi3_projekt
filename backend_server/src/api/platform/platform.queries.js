const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 'id', 'name' ];

module.exports = {
    findAll() {
        return db(tableNames.platform).select(fields);
    },
    async find(name) {
        const [ platform ] = await db(tableNames.platform)
            .select(fields)
            .where({
                name
            });
        return platform;
    },
    async get(id) {
        const [ platform ] = await db(tableNames.platform)
            .select(fields)
            .where({
                id
            });
        return platform;
    }
};
