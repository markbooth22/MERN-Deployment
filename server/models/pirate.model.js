const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
  pirateName: { 
    type: String,
    required: [true, "Pirate's name is required"],
    minlength: [3, "Pirate's name must be at least 3 characters"]

  },
  pirateName: { 
    type: String,
    required: [true, "Pirate's name is required"],
    minlength: [3, "Pirate's name must be at least 3 characters"]
  },
  pirateName: { 
    type: String,
    required: [true, "Pirate's name is required"],
    minlength: [3, "Pirate's name must be at least 3 characters"]
  } 
}, {timestamps: true });

module.exports = mongoose.model('Pirate', PirateSchema);