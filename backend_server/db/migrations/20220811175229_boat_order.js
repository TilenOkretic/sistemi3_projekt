const tableNames = require('../../src/constants/tableNames');
const { createTable, referenceWithName, references } = require('../../src/utils/tables/inex');

/**
 * This function creates all db tables and sets up their relationships
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await createTable(knex, tableNames.country, (table) => {
        table.string('country_code').unique().notNullable().primary();
        // Unique becouse there should not be two countries with the same name
        // 56 is the max name length -> The United Kingdom of Great Britain and Northern Ireland is the longest country name
        table.string('name', 56).notNullable().unique();
    });

    await createTable(knex, tableNames.distributor, (table) => {
        
        // TODO: put this in a refrenceCountryCode function
        table
            .string('country_code')
            .notNullable()
            .references('country_code')
            .inTable(tableNames.country)
            .onDelete('cascade');

        table.string('name', 50).notNullable();
    });

    await createTable(knex, tableNames.boatOrder, (table) => {
        references(table, tableNames.boat);
        references(table, tableNames.distributor);
        table.string('email', 254).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await Promise.all([
        tableNames.boatOrder,
        tableNames.distributor,
        tableNames.country,
    ].map((tableName) => knex.schema.dropTableIfExists(tableName)));
};
