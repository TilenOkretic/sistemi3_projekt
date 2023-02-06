const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 'id', 'hullTypeId', 'motorizationId' ];

module.exports = {
    findAll() {
        return db(tableNames.hullAndMotorization).select(fields);
    },
    async find(htid, mid) {
        const [ hullAndMotorization ] = await db(tableNames.hullAndMotorization)
            .select(fields)
            .where({
                'hullTypeId': htid,
                'motorizationId': mid
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
