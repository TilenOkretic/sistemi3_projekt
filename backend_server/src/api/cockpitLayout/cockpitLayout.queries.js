const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 'id', 'name' ];

module.exports = {
    findAll() {
        return db(tableNames.cockpitLayout).select(fields);
    },
    async find(name) {
        const [ cockpitLayout ] = await db(tableNames.cockpitLayout)
            .select(fields)
            .where({
                name
            });
        return cockpitLayout;
    },
    async get(id) {
        const [ cockpitLayout ] = await db(tableNames.cockpitLayout)
            .select(fields)
            .where({
                id
            });
        return cockpitLayout;
    }
};
