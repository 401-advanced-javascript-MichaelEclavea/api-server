'use strict';

const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    display_name: { type: String, required: false },
    description: { type: String, required: true }
});

module.exports = mongoose.model('products', productsSchema);