const tableNames = require('../../constants/tableNames');

function createTable (knex, name, fun) {
    return knex.schema.createTable(name, (table) => {
        // table id
        table.increments().notNullable();
        fun(table);
        // table timestampsz
        addDefaultColumns(table);
    });
}

// TODO: add these columns to the schema diagram for project seminar
let addDefaultColumns = (table) => {
    table.timestamps(false, true );
    table.datetime('deleted_at');
};

/**
 * Creates a foreign key reference
 * @param {*} table 
 * @param {string} tableName - name of the table to reference (FK )
 */ 
let references = (table, tableName) => {
    // 'unsigned int' because an int id can only be a positive number 
    table
        .integer(`${tableName}_id`)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable(tableName)
        .onDelete('cascade');
};

let referenceWithName = (table, referenceName, tableName) => {
    // 'unsigned int' because an int id can only be a positive number 
    table
        .integer(referenceName)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable(tableName)
        .onDelete('cascade');
};


function createTableWithName (knex, name) { 
    return createTable(knex, name, (table) => {
        table.string('name', 50).notNullable().unique();
    });}


function createColorTable (knex, name) {
    return createTable(knex, name, (table) => {
        references(table, tableNames.color);
    });
}

module.exports = {
    createTable,
    createColorTable,
    createTableWithName,
    addDefaultColumns,
    references,
    referenceWithName
};
