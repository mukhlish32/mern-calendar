const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern_calendar');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database error:'));
db.once('open', () => {
    console.log('Connected to database');
});

// Middleware
app.use(bodyParser.json());

// API routes
app.use('/api/auth', authRoutes);

// Test route handler for the root URL ("/")
app.get('/', (req, res) => {
    res.send('API is running!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
