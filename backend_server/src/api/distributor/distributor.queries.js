const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 
    'id',
    'country_code',
    'name',
];

module.exports = {
    findAll() {
        return db(tableNames.distributor).select(fields);
    },
    async find(countryCode) {
        const [ distributor ] = await db(tableNames.distributor)
            .select(fields)
            .where({
                country_code: countryCode         
            });
        return distributor;
    },
    async insert(distributor) {
        const res = await db(tableNames.distributor)
            .insert(distributor)
            .returning(fields)
            .into('distributor');
        return res;
    },
    async get(id) {
        const [ distributor ] = await db(tableNames.distributor)
            .select(fields)
            .where({
                id
            });
        return distributor;
    }
};
