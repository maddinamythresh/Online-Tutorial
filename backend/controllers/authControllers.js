const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Fake user database (In real-life, this would be from a database)
const users = [];

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store the user (in a real app, store in a database)
  const user = { username, password: hashedPassword };
  users.push(user);

  res.status(201).json({ message: 'User created successfully' });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Check password
  try{
    const isMatch = await bcrypt.compare(password, user.password);
      
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  }

  catch(err){
    return res.status(500).json({ message: 'Internal server error' });
  }


  

  // Create JWT token
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ message: 'Login successful', token });
};
