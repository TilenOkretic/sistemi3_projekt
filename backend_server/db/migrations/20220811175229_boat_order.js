const tableNames = require('../../src/constants/tableNames');
const { createTable, references } = require('../../src/utils/tables/inex');

/**
 * This function creates all db tables and sets up their relationships
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await createTable(knex, tableNames.country, (table) => {
        table.string('countryCode').unique().notNullable().primary();
        // Unique becouse there should not be two countries with the same name
        // 56 is the max name length -> The United Kingdom of Great Britain and Northern Ireland is the longest country name
        table.string('name', 56).notNullable().unique();
    });

    await createTable(knex, tableNames.distributor, (table) => {
        
        // TODO: put this in a refrenceCountryCode function
        table
            .string('countryCode')
            .notNullable()
            .references('countryCode')
            .inTable(tableNames.country)
            .onDelete('cascade');

        table.string('name', 50).notNullable();
    });

    await createTable(knex, tableNames.boatOrder, (table) => {
        table.string('orderId', 32).notNullable().primary();
        references(table, tableNames.boat);
        table
            .string('countryCode')
            .notNullable()
            .references('countryCode')
            .inTable(tableNames.country)
            .onDelete('cascade');        
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
