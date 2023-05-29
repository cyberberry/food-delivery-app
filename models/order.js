const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    dishes: [{
        restaurantId: String,
        dishName: String,
        dishPrice: Number,
        dishQuantity: Number
    }]
});


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
