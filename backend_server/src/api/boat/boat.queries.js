const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 
    'id',
    'hull_and_motorization_id',
    'roof_solution_id',
    'cockpit_layout_id',
    'platform_id',
    'hull_color_id',
    'deck_color_id',
    'upholstery_inner_id',
    'upholstery_outer_id',
    'extra_equipment_id',
];

module.exports = {
    findAll() {
        return db(tableNames.boat).select(fields);
    },
    async find(cid, rid) {
        const [ boat ] = await db(tableNames.boat)
            .select(fields)
            .where({
                'color_id': cid,
                'roof_type_id': rid,
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
