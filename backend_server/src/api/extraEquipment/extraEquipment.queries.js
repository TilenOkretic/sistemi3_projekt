const db = require('../../db');
const tableNames = require('../../constants/tableNames');
const extraEquipmentItemQueries = require('../extraEquipmentItem/extraEquipmentItem.queries');

let fields = [ 
    'id', 
    'rear_bench_configuration',	
    'table_configuration',	
    'bow_sunbathing_cushions',	
    'side_rails_configuration',	
    'foredeck_stainless_steel_rails',	
    'sunbed_tent',	
    'storage_consoles_behind_helm_seats',	
    'steering_wheel_configuration',	
    'windshield	',
    'marine_carpet',	
    'additional_storage',
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
        let rear_bench_configuration = await extraEquipmentItemQueries.find(entry.rearBenchConfiguration);
        let table_configuration = await extraEquipmentItemQueries.find(entry.tableConfiguration);
        let bow_sunbathing_cushions = await extraEquipmentItemQueries.find(entry.bowSunbathingCushions);
        let side_rails_configuration = await extraEquipmentItemQueries.find(entry.sideRailsConfiguration);
        let foredeck_stainless_steel_rails = await extraEquipmentItemQueries.find(entry.foredeckStainlessSteelRails);
        let sunbed_tent = await extraEquipmentItemQueries.find(entry.sunbedTent);
        let storage_consoles_behind_helm_seats = await extraEquipmentItemQueries.find(entry.storageConsolesBehindHelmSeats);
        let steering_wheel_configuration = await extraEquipmentItemQueries.find(entry.steeringWheelConfiguration);
        let windshield = await extraEquipmentItemQueries.find(entry.windshield);
        let marine_carpet = await extraEquipmentItemQueries.find(entry.marineCarpet);
        let additional_storage = await extraEquipmentItemQueries.find(entry.additionalStorage);
        
        const extraEquipment = await db('extra_equipment')
            .insert({
                'rear_bench_configuration': rear_bench_configuration === null ? null : rear_bench_configuration.id,
                'table_configuration': table_configuration === null ? null : table_configuration.id,
                'bow_sunbathing_cushions': bow_sunbathing_cushions === null ? null : bow_sunbathing_cushions.id,
                'side_rails_configuration': side_rails_configuration === null ? null : side_rails_configuration.id,
                'foredeck_stainless_steel_rails': foredeck_stainless_steel_rails === null ? null : foredeck_stainless_steel_rails.id,
                'sunbed_tent': sunbed_tent === null ? null : sunbed_tent.id,
                'storage_consoles_behind_helm_seats': storage_consoles_behind_helm_seats === null ? null : storage_consoles_behind_helm_seats.id,
                'steering_wheel_configuration': steering_wheel_configuration === null ? null : steering_wheel_configuration.id,
                'windshield': windshield === null ? null : windshield.id,
                'marine_carpet': marine_carpet === null ? null : marine_carpet.id,
                'additional_storage': additional_storage === null ? null : additional_storage.id,
            }).returning('id').into(tableNames.extraEquipment);
        return extraEquipment;
    }
};
