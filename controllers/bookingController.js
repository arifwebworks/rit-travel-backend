exports.createBooking = (req, res) => {
  const bookingData = req.body;
  res.status(201).json({ message: 'Booking received', data: bookingData });
};
