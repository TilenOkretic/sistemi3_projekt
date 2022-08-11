const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.color).del();
    
    let colorNames = [
        'dark anthracite',
        'marine blue',
        'pigeon blue',
        'pure gray',
        'royal blue',
        'sapphire gray',
        'white',
    ];

    await colorNames.reduce(async (promise, colorName) => {
        await promise;
        return knex(tableNames.color).insert({
            name: colorName,
        });
    }, Promise.resolve());
};
