const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 
    'id', 
    'name',
];

module.exports = {
    findAll() {
        return db(tableNames.extraEquipmentItem).select(fields);
    },
    async find(name) {
        if(!name) return null;
        const [ extraEquipmentItem ] = await db(tableNames.extraEquipmentItem)
            .select(fields)
            .where({
                name
            });
        return extraEquipmentItem;
    },
    async get(id) {
        const [ extraEquipmentItem ] = await db(tableNames.extraEquipmentItem)
            .select(fields)
            .where({
                id
            });
        return extraEquipmentItem;
    },
};
