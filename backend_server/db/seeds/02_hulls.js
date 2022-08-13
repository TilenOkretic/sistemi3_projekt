const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.hullType).del();
    
    let hullNames = [
        'planing',
        'motor',
        'electric',
        'proupulsion',
    ];

    await hullNames.reduce(async (promise, hullName) => {
        await promise;
        return knex(tableNames.hullType).insert({
            name: hullName,
        });
    }, Promise.resolve());
};
