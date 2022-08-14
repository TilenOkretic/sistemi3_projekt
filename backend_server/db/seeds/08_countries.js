const tableNames = require('../../src/constants/tableNames');
const https = require('https');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.country).del();
    
    let url = 'https://restcountries.com/v3.1/all';
    
    // TODO: look into a better way of generating a GET request
    let req = await fetch(url);
    let data = await req.json();

    data.forEach(async (country) => {
        let countryCode = `${country.cca2}-${country.cca3}-${country.cioc}-${country.ccn3}`;
        let name = country.name.common;
        let newCountry = {
            'country_code': countryCode,
            name,
        };
        await knex(tableNames.country).insert(newCountry);
    });
};
