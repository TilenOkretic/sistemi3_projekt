const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.cockpitLayout).del();
    
    let cockpitNames = [
        'standard',
        'passenger',
        'lounge',
        'console center',
        'console side',
    ];

    await cockpitNames.reduce(async (promise, cockpitName) => {
        await promise;
        return knex(tableNames.cockpitLayout).insert({
            name: cockpitName,
        });
    }, Promise.resolve());
};
