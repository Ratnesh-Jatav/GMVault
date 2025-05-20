const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
  user: { type: String, required: true }, // store username or userId
  site: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Password', passwordSchema);
