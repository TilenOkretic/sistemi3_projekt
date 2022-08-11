const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.extraEquipmentItem).del();
    
    let extraEquipmentItemNames = [
        'rear bench configuration',
        'galley kitchen',
        'rear bench',
        'starboard bench',
        'co driver seat',
        'table configuration',
        'deck table',
        'deck table lounge layout',
        'bow sunbathing cushions',
        'side rails configuration',
        'stainless steel fender profiles',
        'fender profiles',
        'foredeck stainless steel rails',
        'sunbed tent',
        'storage consoles behind helm seats',
        'steering wheel configuration',
        'steering wheel rubber',
        'steering wheel wood',
        'windshield',
        'marine carpet',
        'additional storage',
    ];

    await extraEquipmentItemNames.reduce(async (promise, eeiName) => {
        await promise;
        return knex(tableNames.extraEquipmentItem).insert({
            name: eeiName,
        });
    }, Promise.resolve());
};
