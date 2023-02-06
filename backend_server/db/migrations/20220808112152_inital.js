const tableNames = require('../../src/constants/tableNames');
const { 
    createTable,
    createColorTable,
    createTableWithName,
    references,
    referenceWithName, 
    nullableReferenceWithName } = require('../../src/utils/tables/inex');

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
        createTableWithName(knex, tableNames.tapestry),
    ]); 

    await createTable(knex, tableNames.roofSolution, (table) => {
        references(table, tableNames.roofType);
        references(table, tableNames.color);
    });

    await createTableWithName(knex, tableNames.platform);

    await createTable(knex, tableNames.hullAndMotorization, (table) => {
        references(table, tableNames.hullType);
        references(table,  tableNames.motorization);
    });

    await createTableWithName(knex, tableNames.cockpitLayout);

    await createTable(knex, tableNames.extraEquipment, (table) => {
        table.string('rearBenchConfiguration', 50);
        
        table.string('tableConfiguration', 50);
        
        table.string('bowSunbathingCushions', 50);
        
        table.string('sideRailsConfiguration', 50);
        
        table.string('foredeckStainlessSteelRails', 50);
        table.string('sunbedTent', 50);
        table.string('storageConsolesBehindHelmSeats', 50);

        table.string('steeringWheelConfiguration', 50);

        table.string('windshield', 50);
        table.string('marineCarpet', 50);
        table.string('additionalStorage', 50);
    });

    await createTable(knex, tableNames.boat, (table) => {
        references(table, tableNames.hullAndMotorization);
        references(table, tableNames.roofSolution);
        references(table, tableNames.cockpitLayout);
        references(table, tableNames.platform);
        referenceWithName(table, 'hullColorId', tableNames.color);
        referenceWithName(table, 'deckColorId', tableNames.color);
        referenceWithName(table, 'upholsteryInnerId', tableNames.tapestry);
        referenceWithName(table, 'upholsteryOuterId', tableNames.tapestry);
        references(table, tableNames.extraEquipment);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// TODO: look into an orederd name list 
exports.down = async (knex) => {
    await Promise.all([
        tableNames.boat,

        tableNames.extraEquipment,
        tableNames.extraEquipmentItem,
        
        tableNames.hullAndMotorization,
        tableNames.cockpitLayout,
        tableNames.roofSolution,
        tableNames.roofType,
        tableNames.platform,
        tableNames.motorization,
        
        tableNames.hullType,
        tableNames.tapestry,
        
        tableNames.color,
    ].map((tableName) => knex.schema.dropTableIfExists(tableName)));
};
