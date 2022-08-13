const colorQueries = require('../../color/color.queries');
const roofSolutionQueries = require('../../roofSolution/roofSolution.queries');
const roofTypeQueries = require('../../roofType/roofType.queries');

module.exports = getRoofSolutionId = async (roofColor, roofType) => {
    console.log('color', roofColor);
    let { id: cid } = await colorQueries.find(roofColor);
    let { id: rid } = await roofTypeQueries.find(roofType); 

    const { id } = await roofSolutionQueries.find(cid, rid);
    return id;
};
