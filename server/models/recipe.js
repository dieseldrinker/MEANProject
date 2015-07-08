var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
	author: { type: String, trim: true },
	name: { type: String, trim: true },
	ingredients: [],
	directions: { type: String, trim: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
})