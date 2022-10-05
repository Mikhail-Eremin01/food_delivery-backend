const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isActivated: {
            type: Boolean,
            default: false,
        },
        activationLink: {
            type: String,
        },
    },
    { timestamps: true }
);

const User = model("user", UserSchema);

module.exports = User;
