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
        const conn = knex(tableNames.distributor); 
        conn.insert({
            name: `Alfastreet Marine ${country.countryCode.split('-')[1]}-primary`,
            'countryCode': country.countryCode
        });
        return conn;
    }, Promise.resolve());
    
    countries = await knex(tableNames.country);

    await countries.reduce(async (promise, country) => {
        await promise;
        const conn = knex(tableNames.distributor); 
        conn.insert({
            name: `Alfastreet Marine ${country.countryCode.split('-')[1]}-secondary`,
            'countryCode': country.countryCode
        });
        return conn;
    }, Promise.resolve());

};
