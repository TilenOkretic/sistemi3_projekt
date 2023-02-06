const db = require('../../db');
const tableNames = require('../../constants/tableNames');

let fields = [ 
    'id', 
    'rearBenchConfiguration',	
    'tableConfiguration',	
    'bowSunbathingCushions',	
    'sideRailsConfiguration',	
    'foredeckStainlessSteelRails',	
    'sunbedTent',	
    'storageConsolesBehindHelmSeats',	
    'steeringWheelConfiguration',	
    'windshield	',
    'marineCarpet',	
    'additionalStorage',
];

module.exports = {
    findAll() {
        return db(tableNames.extraEquipment).select(fields);
    },
    async find(name) {
        const [ extraEquipment ] = await db(tableNames.extraEquipment)
            .select(fields)
            .where({
                name
            });
        return extraEquipment;
    },
    async get(id) {
        const [ extraEquipment ] = await db(tableNames.extraEquipment)
            .select(fields)
            .where({
                id
            });
        return extraEquipment;
    },
    async insert(entry) {
        
        const extraEquipment = await db('extraEquipment')
            .insert({
                'rearBenchConfiguration': entry.rearBenchConfiguration,
                'tableConfiguration': entry.tableConfiguration,
                'bowSunbathingCushions': entry.bowCushioning,
                'sideRailsConfiguration': entry.sideRailsConfiguration,
                'foredeckStainlessSteelRails': entry.frontGuardRail,
                'sunbedTent': entry.sunbedTent,
                'storageConsolesBehindHelmSeats': entry.storageConsolesBehindHelmSeats,
                'steeringWheelConfiguration': entry.steeringWheelConfiguration,
                'windshield': entry.windshield,
                'marineCarpet': entry.marineCarpet,
                'additionalStorage': entry.additionalStorage,
            }).returning('id').into(tableNames.extraEquipment);
        return extraEquipment;
    }
};
