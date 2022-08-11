const { Model } = require('objection');
const tableNames = require('../../constants/tableNames');
const schema = require('./roofSolution.schema.json');

class RoofSolution extends Model {
    static get tableName() {
        return tableNames.roofSolution;
    }

    static get jsonSchema() {
        return schema;  
    }
}

module.exports = RoofSolution;
