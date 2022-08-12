const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.hullAndMotorization).del();

    
    let hullTypes = await knex(tableNames.hullType);
    let motorizations = await knex(tableNames.motorization);
    
    await hullTypes.reduce(async (promise, hull) => {
        await promise;
        return await motorizations.reduce(async (promise, motorization) => {
            await promise;
            return knex(tableNames.hullAndMotorization).insert({
                'hull_type_id': hull.id,
                'motorization_id': motorization.id
            });
        }, Promise.resolve());
    }, Promise.resolve());
};
