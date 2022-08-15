const express = require('express');

const router = express.Router();

const boatQueries = require('../boat/boat.queries');

const { createNewBoatObject } = require('../boat/boat.utils');
const distributorQueries = require('../distributor/distributor.queries');
const boatOrderQueries = require('./boatOrder.queries');
const { getOrderId } = require('./boatOrder.utils');

// TODO: handle boat order UPDATING
router.post('/', async (req, res, next) => {
    // console.log(req.body);

    let orderId = getOrderId(req.body);
    
    let exists = await boatOrderQueries.find(orderId);
    
    let newBoat = await createNewBoatObject(req.body, next);

    let result = await boatQueries.insert(newBoat);
    let { id: boatId } = result[0];
    console.log('\nInserted boat id:', boatId);

    let { id: distributor_id } = await distributorQueries.find(req.body.country);

    let newBoatOrder = {
        'order_id': orderId,
        'boat_id': boatId,
        'distributor_id': distributor_id,		
        'email': req.body.sendermail,
    };

    try {
        if(!exists){
            await boatOrderQueries.insert(newBoatOrder);
        } else {
            console.log('Updating order with id', orderId);
            await boatOrderQueries.update(orderId, newBoatOrder);
        }

        res.json({
            msg: `Boat configuration mail sent. Your order ID is: ${orderId}`,
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
