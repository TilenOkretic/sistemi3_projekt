const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.motorization).del();
    
    let motorNames = [
        '1-outboard-motor',
        '2-outboard-motor',
        '1-inboard-motor',
        '2-inboard-motor',
        '1-electric-inboard',
        '2-electric-inboard',
    ];

    await motorNames.reduce(async (promise, motorName) => {
        await promise;
        return knex(tableNames.motorization).insert({
            name: motorName,
        });
    }, Promise.resolve());
};
