const mongoose = require('mongoose');

const userActivitySchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    timestamp: { 
        type: Date, 
        required: true 
    },
    action: { 
        type: String, 
        required: true 
    }
});

const UserActivity = mongoose.model('userActivity', userActivitySchema);

module.exports = UserActivity;