require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const Password = require('./models/Password');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  res.json({ message: 'Login successful', username });
});

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }
  const exists = await User.findOne({ username });
  if (exists) {
    return res.status(409).json({ message: 'Username already exists' });
  }
  const user = new User({ username, password });
  await user.save();
  res.json({ message: 'Account created', username });
});

// Get all passwords for a user
app.get('/api/passwords', async (req, res) => {
  const { user } = req.query;
  if (!user) return res.status(400).json({ message: 'User required' });
  const passwords = await Password.find({ user });
  res.json(passwords);
});

// Save a new password for a user
app.post('/api/passwords', async (req, res) => {
  const { user, site, username, password } = req.body;
  if (!user || !site || !username || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }
  const entry = new Password({ user, site, username, password });
  await entry.save();
  res.json({ message: 'Password saved', entry });
});

// Delete a password by id for a user
app.delete('/api/passwords/:id', async (req, res) => {
  const { user } = req.body;
  const { id } = req.params;
  if (!user || !id) return res.status(400).json({ message: 'User and id required' });
  await Password.deleteOne({ _id: id, user });
  res.json({ message: 'Password deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
