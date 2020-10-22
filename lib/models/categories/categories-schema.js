'use strict';

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    display_name: { type: String, required: false },
    description: { type: String, required: true }
});

module.exports = mongoose.model('categories', categorySchema);