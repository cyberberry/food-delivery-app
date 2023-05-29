const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB Atlas connection
const password = 'admin';
const dbName = 'FoodDelivery';

// Connect to MongoDB
mongoose
    .connect(`mongodb+srv://admin:${encodeURIComponent(password)}@cluster0.zgcfwm0.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Models
const Restaurant = require('./models/restaurant');
const Order = require('./models/order');

// Routes
const restaurantRoutes = require('./routes/restaurantRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
