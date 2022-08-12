const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 'id', 'roof_type_id', 'color_id' ];

module.exports = {
    findAll() {
        return db(tableNames.roofSolution).select(fields);
    },
    async find(cid, rid) {
        const [ roofSolution ] = await db(tableNames.roofSolution)
            .select(fields)
            .where({
                'color_id': cid,
                'roof_type_id': rid,
            });
        return roofSolution;
    },
    async get(id) {
        const [ roofSolution ] = await db(tableNames.roofSolution)
            .select(fields)
            .where({
                id
            });
        return roofSolution;
    }
};
