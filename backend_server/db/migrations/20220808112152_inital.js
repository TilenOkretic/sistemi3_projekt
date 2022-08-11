const tableNames = require('../../src/constants/tableNames');

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

/**
 * This function creates all db tables and sets up their relationships
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    // create tables with no foreign key references
    await Promise.all([
        createTable(knex, tableNames.country, (table) => {
            table.string('country_code').unique().notNullable().primary();
            // Unique becouse there should not be two countries with the same name
            // 56 is the max name length -> The United Kingdom of Great Britain and Northern Ireland is the longest country name
            table.string('name', 56).notNullable().unique();
        }),
        createTable(knex, tableNames.color, (table) => {
            table.string('name').notNullable().unique();
        }),
        createTableWithName(knex, tableNames.hullType),
        createTableWithName(knex, tableNames.motorization),
        createTableWithName(knex, tableNames.roofType),
        createTableWithName(knex, tableNames.platformType),
        // createTableWithName(knex, tableNames.upholstryType),
        createTableWithName(knex, tableNames.tapestry),
    ]); 

    // create color tables
    await createColorTable(knex, tableNames.deckColor);
    await createColorTable(knex, tableNames.hullColor);
    await createColorTable(knex, tableNames.roofColor);

    await createTable(knex, tableNames.roofSolution, (table) => {
        references(table, tableNames.roofType);
        references(table, tableNames.roofColor);
    });

    await createTable(knex, tableNames.platform, (table) => {
        references(table, tableNames.platformType);
        references(table, tableNames.hullColor);
    });

    await createTable(knex, tableNames.hullAndMotorization, (table) => {
        references(table, tableNames.hullType);
        references(table,  tableNames.motorization);
    });

    await createTableWithName(knex, tableNames.cockpitLayout);

    // await createTable(knex, tableNames.upholstry, (table) => {
    //     references(table, tableNames.upholstryType);
    //     references(table, tableNames.tapestry);
    // });

    await createTable(knex, tableNames.extraEquipment, (table) => {});

    await createTable(knex, tableNames.extraEquipmentItem, (table) => {
        references(table, tableNames.extraEquipment);
        table.string('name', 50);
    });

    await createTable(knex, tableNames.boat, (table) => {
        references(table, tableNames.hullAndMotorization);
        references(table, tableNames.roofSolution);
        references(table, tableNames.cockpitLayout);
        references(table, tableNames.platform);
        references(table, tableNames.hullColor);
        references(table, tableNames.deckColor);
        referenceWithName(table, 'upholstery_inner_id', tableNames.tapestry);
        referenceWithName(table, 'upholstery_outer_id', tableNames.tapestry);
        references(table, tableNames.extraEquipment);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await Promise.all([
        tableNames.boat,

        tableNames.extraEquipmentItem,
        tableNames.extraEquipment,
        
        tableNames.hullAndMotorization,
        tableNames.cockpitLayout,
        tableNames.roofSolution,
        tableNames.roofColor,
        tableNames.roofType,
        tableNames.platform,
        tableNames.platformType,
        tableNames.motorization,
        
        tableNames.hullType,
        tableNames.hullColor,
        tableNames.deckColor,
        tableNames.tapestry,
        
        tableNames.color,
        // tableNames.upholstry,
        // tableNames.upholstryType,
        tableNames.country,
    ].map((tableName) => knex.schema.dropTableIfExists(tableName)));
};
