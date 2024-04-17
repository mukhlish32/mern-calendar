const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Event = mongoose.model('events', eventSchema);

module.exports = Event;
