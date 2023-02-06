const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 
    'id',	
    'orderId',	
    'boatId',
    'countryCode',		
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
                'orderId': id             
            });
        return boatOrder;
    },
    async insert(boatOrder) {
        const res = await db(tableNames.boatOrder)
            .insert(boatOrder)
            .returning(fields)
            .into('boatOrder');
        return res;
    },
    async update(id, boatOrder) {
        const res = await db(tableNames.boatOrder)
            .update(boatOrder)
            .where({
                'orderId': id
            });
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
