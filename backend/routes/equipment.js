const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/equipment.json');

// Helper function to read data
const readData = () => {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data);
};

// Helper function to write data
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET all equipment
router.get('/', (req, res) => {
  try {
    const equipment = readData();
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read equipment data' });
  }
});

// POST - Add new equipment
router.post('/', (req, res) => {
  try {
    const equipment = readData();
    const newEquipment = {
      id: Date.now(), // Simple ID generation
      ...req.body
    };
    equipment.push(newEquipment);
    writeData(equipment);
    res.status(201).json(newEquipment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add equipment' });
  }
});

// PUT - Update equipment
router.put('/:id', (req, res) => {
  try {
    const equipment = readData();
    const id = parseInt(req.params.id);
    const index = equipment.findIndex(e => e.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Equipment not found' });
    }
    
    equipment[index] = { id, ...req.body };
    writeData(equipment);
    res.json(equipment[index]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update equipment' });
  }
});

// DELETE equipment
router.delete('/:id', (req, res) => {
  try {
    const equipment = readData();
    const id = parseInt(req.params.id);
    const filteredEquipment = equipment.filter(e => e.id !== id);
    
    if (equipment.length === filteredEquipment.length) {
      return res.status(404).json({ error: 'Equipment not found' });
    }
    
    writeData(filteredEquipment);
    res.json({ message: 'Equipment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete equipment' });
  }
});

module.exports = router;