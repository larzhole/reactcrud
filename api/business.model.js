const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema({
	personName: {
		type: String
	},
	businessName: {
		type: String
	},
	businessGstNumber: {
		type: Number
	}
}, {
	collection: 'business'
});

module.exports = mongoose.model('Business', Business);
