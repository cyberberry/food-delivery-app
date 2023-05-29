const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    dishName: {
        type: String,
        required: true,
    },
    dishPrice: {
        type: Number,
        required: true,
    },
    dishQuantity: {
        type: Number,
        required: true,
    },
});


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
