const db = require('../../db');
const tableNames = require('../../constants/tableNames');

const fields = [ 'id', 'name' ];

module.exports = {
    findAll() {
        return db(tableNames.roofType).select(fields);
    },
    async find(name) {
        const [ roofType ] = await db(tableNames.roofType)
            .select(fields)
            .where({
                name,
            });
        return roofType;
    },
    async get(id) {
        const [ roofType ] = await db(tableNames.roofType)
            .select(fields)
            .where({
                id
            });
        return roofType;
    }
};
