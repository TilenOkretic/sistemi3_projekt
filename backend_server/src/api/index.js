const express = require('express');

const deckColor = require('./color/color.routes');
const roofSolution = require('./roofSolution/roofSolution.rotues');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: project.message,
    });
});

router.use('/color', deckColor);
router.use('/roofSolution', roofSolution);

module.exports = router;
