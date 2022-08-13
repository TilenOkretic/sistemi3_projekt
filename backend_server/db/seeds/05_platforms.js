const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.platform).del();
    
    let platformNames = [
        'noPlatform',
        'permateekBathingPlatform',
    ];

    await platformNames.reduce(async (promise, platformName) => {
        await promise;
        return knex(tableNames.platform).insert({
            name: platformName,
        });
    }, Promise.resolve());
};
