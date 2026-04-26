const express = require('express');
const router = express.Router();
const Item = require('../models/items');

// GET all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST item
router.post('/', async (req, res) => {
  const item = new Item(req.body);
  const saved = await item.save();
  res.json(saved);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// UPDATE
router.put('/:id', async (req, res) => {
  const updated = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

module.exports = router;
