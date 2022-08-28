const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    id: {
        type: ObjectId
    }
}, { timestamps: true });

const Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = Restaurant;