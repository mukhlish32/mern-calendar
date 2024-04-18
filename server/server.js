const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern_calendar');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database error:'));
db.once('open', () => {
    console.log('Connected to database');
});

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
