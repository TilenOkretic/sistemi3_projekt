const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.extraEquipmentItem).del();
    
    let extraEquipmentItemNames = [
        'galleyKitchen',
        'rearBench',
        'starboardBench',
        'coDriverSeat',
        'deckTable',
        'deckTableLoungeLayout',
        'bowSunbathingCushions',
        'chrome',
        'black',
        'frontGuardRail',
        'sunbedTent',
        'miniCupHolders',
        'steeringWheelRubber',
        'steeringWheelWood',
        'windshield',
        'marineCarpet',
        'additionalStorage',
        'piping',
        'starboardBench',
    ];

    await extraEquipmentItemNames.reduce(async (promise, eeiName) => {
        await promise;
        return knex(tableNames.extraEquipmentItem).insert({
            name: eeiName,
        });
    }, Promise.resolve());
};
