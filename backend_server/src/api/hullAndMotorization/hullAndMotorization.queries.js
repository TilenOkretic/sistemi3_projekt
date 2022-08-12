const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 'id', 'hull_type_id', 'motorization_id' ];

module.exports = {
    findAll() {
        return db(tableNames.hullAndMotorization).select(fields);
    },
    async find(htid, mid) {
        const [ hullAndMotorization ] = await db(tableNames.hullAndMotorization)
            .select(fields)
            .where({
                'hull_type_id': htid,
                'motorization_id': mid
            });
        return hullAndMotorization;
    },
    async get(id) {
        const [ hullAndMotorization ] = await db(tableNames.hullAndMotorization)
            .select(fields)
            .where({
                id
            });
        return hullAndMotorization;
    }
};
