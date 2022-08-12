const express = require('express');

const deckColor = require('./color/color.routes');
const roofSolution = require('./roofSolution/roofSolution.rotues');
const boat = require('./boat/boat.routes');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: project.message,
    });
});

router.use('/color', deckColor);
router.use('/roofSolution', roofSolution);
router.use('/boat', boat);

module.exports = router;
