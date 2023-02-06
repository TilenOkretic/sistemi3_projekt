const express = require('express');

const router = express.Router();

const eqq = require('./extraEquipment.queries');

router.get('/', async (req, res, next) => {
    try {
        let result = await eqq.findAll();
        
        res.json(result);
    } catch (err) {
        console.error(err);
    }
});

router.post('/', async (req, res, next) => {
});

module.exports = router;
