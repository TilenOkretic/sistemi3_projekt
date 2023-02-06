const express = require('express');

const deckColor = require('./color/color.routes');
const roofSolution = require('./roofSolution/roofSolution.rotues');
const boat = require('./boat/boat.routes');
const distributor = require('./distributor/distributor.routes');
const extraEquipment = require('./extraEquipment/extraequipment.routes');
const boatOrder = require('./boatOrder/boatOrder.routes');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: project.message,
    });
});

router.use('/color', deckColor);
router.use('/roofSolution', roofSolution);
router.use('/distributor', distributor);
router.use('/extraEquipment', extraEquipment);
router.use('/boat', boat);
router.use('/boatOrder', boatOrder);

module.exports = router;
