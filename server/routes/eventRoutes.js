const express = require('express');
const event = require('../controllers/eventController');
const router = express.Router();

router.post('/', event.createEvent);
router.get('/', event.getAllEvents);
router.patch('/:id', event.updateEvent);
router.delete('/:id', event.deleteEvent);

module.exports = router;
