const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.motorization).del();
    
    let motorNames = [
        '1x outboard',
        '2x outboard',
        '1x inboard',
        '2x inboard',
        '1x electric outboard',
        '1x electric inboard',
        '2x electric inboard',
    ];

    await motorNames.reduce(async (promise, motorName) => {
        await promise;
        return knex(tableNames.motorization).insert({
            name: motorName,
        });
    }, Promise.resolve());
};
