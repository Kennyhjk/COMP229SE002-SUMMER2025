const Contact = require('../models/contact.model.js');

exports.getAll = async (req, res) => {
  const data = await Contact.find();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await Contact.findById(req.params.id);
  if (!data) return res.status(404).json({ message: 'Not found' });
  res.json(data);
};

exports.create = async (req, res) => {
  const newDoc = new Contact(req.body);
  await newDoc.save();
  res.status(201).json(newDoc);
};

exports.update = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

exports.removeAll = async (req, res) => {
  await Contact.deleteMany();
  res.status(204).end();
};