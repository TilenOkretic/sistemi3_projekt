const tableNames = require('../../src/constants/tableNames');
const axios = require('axios');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.country).del();
    
    let url = 'https://restcountries.com/v3.1/all';
    
    // TODO: this is the node v18 way of doing it
    // let req = await fetch(url);
    // let data = await req.json();
    // axios
    //     .get('https://restcountries.com/v3.1/all')
    //     .then((res) => {
    //         console.log(res);
    //     });

    let req = await axios.get(url, {
        responseType: 'json',
    });
    
    let data = await req.data;

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
