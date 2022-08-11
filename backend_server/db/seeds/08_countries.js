const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.country).del();
    
    let slo = {
        'country_code': 'SVN',
        name: 'slovenia'
    };

    let it = {
        'country_code': 'ITA',
        name: 'italy'
    };

    let usa = {
        'country_code': 'USA',
        name: 'united states of america'
    };

    await knex(tableNames.country).insert(slo);
    await knex(tableNames.country).insert(it);
    await knex(tableNames.country).insert(usa);
};
