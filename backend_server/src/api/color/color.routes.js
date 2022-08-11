const express = require('express');

const queries = require('./color.queries');
const router = express.Router();

router.get('/', async (req, res) => {
    let colors = await queries.findAll();
    console.log(colors);
    res.json(colors);
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        if(isNaN(id)) {
            const err = new Error('Invalid ID');
            err.status(422);
            throw err;
        } else {
            let color = await queries.get(id);
            if(color) {
                return res.json(color);
            } 
            return next();
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;
