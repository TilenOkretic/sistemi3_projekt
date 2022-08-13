const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.country).del();
    
    let slo = {
        'country_code': 'SI-SVN-SLO-705',
        name: 'slovenia'
    };

    let it = {
        'country_code': 'IT-ITA-ITA-380',
        name: 'italy'
    };

    let usa = {
        'country_code': 'US-USA-USA-840',
        name: 'united states of america'
    };

    await knex(tableNames.country).insert(slo);
    await knex(tableNames.country).insert(it);
    await knex(tableNames.country).insert(usa);
};
