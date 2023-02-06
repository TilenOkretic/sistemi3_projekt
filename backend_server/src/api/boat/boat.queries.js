const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 
    'id',
    'hullAndMotorizationId',
    'roofSolutionId',
    'cockpitLayoutId',
    'platformId',
    'hullColorId',
    'deckColorId',
    'upholsteryInnerId',
    'upholsteryOuterId',
    'extraEquipmentId',
];

module.exports = {
    findAll() {
        return db(tableNames.boat).select(fields);
    },
    async find(cid, rid) {
        const [ boat ] = await db(tableNames.boat)
            .select(fields)
            .where({
                'colorId': cid,
                'roofTypeId': rid,
            });
        return boat;
    },
    async insert(boat) {
        const res = await db(tableNames.boat)
            .insert(boat)
            .returning(fields)
            .into('boat');
        return res;
    },
    async get(id) {
        const [ boat ] = await db(tableNames.boat)
            .select(fields)
            .where({
                id
            });
        return boat;
    }
};
