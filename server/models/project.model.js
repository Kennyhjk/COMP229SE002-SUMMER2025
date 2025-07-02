const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  firstName:  { type: String, required: true },
  lastName:   { type: String, required: true },
  email:      { type: String, required: true },
  completion: { type: Date,   required: true },
  description:{ type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);
