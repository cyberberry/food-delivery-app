const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    dishes: [{ name: String, price: Number }],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
