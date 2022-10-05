const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const DishSchema = new Schema(
    {
        dishesName: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        available: {
            type: Boolean,
            required: true,
        },
        restaurantsId: {
            type: ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

const Dish = model("dish", DishSchema);

module.exports = Dish;
