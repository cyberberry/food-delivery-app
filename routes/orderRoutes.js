const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const Order = require('../models/order');

router.post('/submit', async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;

        const carts = await Cart.find();
        const dishes = carts.map(item => ({
            name: item.dishName,
            price: item.dishPrice,
            quantity: item.quantity,
        }));

        const order = new Order({
            name,
            email,
            phone,
            address,
            dishes,
        });
        await order.save();

        await Cart.deleteMany();

        res.status(201).json({ message: 'Order placed successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
