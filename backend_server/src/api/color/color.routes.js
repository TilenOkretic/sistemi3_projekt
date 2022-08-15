const express = require('express');
const colorQueries = require('./color.queries');

const queries = require('./color.queries');
const router = express.Router();

router.get('/', async (req, res) => {
    let colors = await queries.findAll();
    console.log(colors);
    res.json(colors);
});

router.get('/:name', async (req, res, next) => {
    const { name } = req.params;
    let { id: cid } = await colorQueries.find(name);
    res.json(cid);
});

module.exports = router;
