const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  serviceType: String,
  date: Date,
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Booking', bookingSchema);
