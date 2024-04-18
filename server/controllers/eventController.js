const Event = require('../models/Event');
const sendEmailHandler = require("../services/emailService");

// Create event
exports.createEvent = async (req, res) => {
    try {
        const { email, date, description } = req.body;
        const event = new Event({ email, date, description });
        await event.save();

        // Send email
        const content = 'Hi Salam kenal'
        await sendEmailHandler(email, content, content);
        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update event
exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, date, description } = req.body;
        const updatedEvent = await Event.findByIdAndUpdate(id, { email, date, description }, { new: true });
        res.json(updatedEvent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete event
exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        await Event.findByIdAndDelete(id);
        res.json({ message: 'Event berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
