exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ message: 'Login successful', email });
};
