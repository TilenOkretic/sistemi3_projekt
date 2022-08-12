const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 'id', 'name' ];

module.exports = {
    findAll() {
        return db(tableNames.motorization).select(fields);
    },
    async find(name) {
        const [ motorization ] = await db(tableNames.motorization)
            .select(fields)
            .where({
                name
            });
        return motorization;
    },
    async get(id) {
        const [ motorization ] = await db(tableNames.motorization)
            .select(fields)
            .where({
                id
            });
        return motorization;
    }
};
