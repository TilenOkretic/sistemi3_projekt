const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 
    'id',	
    'boat_id',
    'distributor_id',		
    'email',
];

module.exports = {
    findAll() {
        return db(tableNames.boatOrder).select(fields);
    },
    async find(id) {
        const [ boatOrder ] = await db(tableNames.boatOrder)
            .select(fields)
            .where({
                id             
            });
        return boatOrder;
    },
    async insert(boatOrder) {
        const res = await db(tableNames.boatOrder)
            .insert(boatOrder)
            .returning(fields)
            .into('boat_order');
        return res;
    },
    async get(id) {
        const [ boatOrder ] = await db(tableNames.boatOrder)
            .select(fields)
            .where({
                id
            });
        return boatOrder;
    }
};
