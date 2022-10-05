const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const RestaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: Object,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        telephone: {
            type: String,
            required: true,
        },
        id: {
            type: ObjectId,
        },
    },
    { timestamps: true }
);

const Restaurant = model("restaurant", RestaurantSchema);

module.exports = Restaurant;
