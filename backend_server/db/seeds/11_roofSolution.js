const tableNames = require('../../src/constants/tableNames');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries
    await knex(tableNames.roofSolution).del();
    
    let colors = await knex(tableNames.color);
    let roofTypes = await knex(tableNames.roofType);
    
    await colors.reduce(async (promise, color) => {
        await promise;
        return await roofTypes.reduce(async (promise, roofType) => {
            await promise;
            return knex(tableNames.roofSolution).insert({
                'colorId': color.id,
                'roofTypeId': roofType.id
            });
        }, Promise.resolve());
    }, Promise.resolve());
};
