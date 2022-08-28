const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    dishesName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    restaurantsId: {
        type: ObjectId,
        required: true
    }
}, { timestamps: true });

const Dish = mongoose.model('dish', dishSchema);

module.exports = Dish;