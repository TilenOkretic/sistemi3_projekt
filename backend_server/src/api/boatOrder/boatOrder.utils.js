
let getOrderId = (data) => {
    let { orderId } = data;
    return orderId === -1 ? require('crypto').randomBytes(16).toString('hex') : orderId;
};


module.exports = {
    getOrderId,
};
