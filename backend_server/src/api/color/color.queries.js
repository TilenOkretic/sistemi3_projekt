const db = require('../../db');
const tableNames = require('../../constants/tableNames');
const { get } = require('./color.routes');

let fields = [ 'id', 'name' ];

module.exports = {
    findAll() {
        return db(tableNames.color).select(fields);
    },
    async find(name) {
        const [ color ] = await db(tableNames.color)
            .select(fields)
            .where({
                name,
            });
        return color;
    },
    async get(id) {
        const [ color ] = await db(tableNames.color)
            .select(fields)
            .where({
                id
            });
        return color;
    }
};
