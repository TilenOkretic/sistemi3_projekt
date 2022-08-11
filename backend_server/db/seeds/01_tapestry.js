const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.tapestry).del();
    
    let tapestryNames = [
        'mercury',
        'snow',
        'tapioca',
        'taupe',
        'tonic',
        'tonic diamonds',
    ];

    await tapestryNames.reduce(async (promise, tapestryName) => {
        await promise;
        return knex(tableNames.tapestry).insert({
            name: tapestryName,
        });
    }, Promise.resolve());
};
