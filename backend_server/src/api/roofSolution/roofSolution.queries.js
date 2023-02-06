const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 'id', 'roofTypeId', 'colorId' ];

module.exports = {
    findAll() {
        return db(tableNames.roofSolution).select(fields);
    },
    async find(cid, rid) {
        const [ roofSolution ] = await db(tableNames.roofSolution)
            .select(fields)
            .where({
                'colorId': cid,
                'roofTypeId': rid,
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
