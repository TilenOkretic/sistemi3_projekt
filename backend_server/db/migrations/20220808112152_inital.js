const tableNames = require('../../src/constants/tableNames');
const { 
    createTable,
    createColorTable,
    createTableWithName,
    references,
    referenceWithName } = require('../../src/utils/tables/inex');

/**
 * This function creates all db tables and sets up their relationships
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    // create tables with no foreign key references
    await Promise.all([
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

    await createTable(knex, tableNames.extraEquipment, () => {});

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
    ].map((tableName) => knex.schema.dropTableIfExists(tableName)));
};
