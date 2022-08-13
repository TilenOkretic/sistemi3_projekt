const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.color).del();
    
    let colorNames = [
        'none',
        'darkAntracite',
        'marineBlue',
        'pigeonBlue',
        'pureGrey',
        'royalBlue',
        'saphirGrey',
        'white',
    ];

    await colorNames.reduce(async (promise, colorName) => {
        await promise;
        return knex(tableNames.color).insert({
            name: colorName,
        });
    }, Promise.resolve());
};
