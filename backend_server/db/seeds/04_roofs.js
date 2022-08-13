const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.roofType).del();
    
    let roofNames = [
        'none',
        'hht',
        't-top',
        'bimini',
        'sprayhood bimini',
    ];

    await roofNames.reduce(async (promise, roofName) => {
        await promise;
        return knex(tableNames.roofType).insert({
            name: roofName,
        });
    }, Promise.resolve());
};
