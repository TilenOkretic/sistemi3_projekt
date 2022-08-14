const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.distributor).del();
    
    let distributorMap = {
        'SI-SVN-SLO-705': 'Alfastreet Marine',
        'IT-ITA-ITA-380': 'Alfastreet Marine USA',
        'US-USA-USA-840': 'Alfastreet Marine IT',
    };

    let countries = await knex(tableNames.country);

    await countries.reduce(async (promise, country) => {
        await promise;
        return knex(tableNames.distributor).insert({
            name: `Alfastreet Marine ${country.country_code.split('-')[1]}`,
            'country_code': country.country_code
        });
    }, Promise.resolve());
};
