import mongoose from "mongoose";
import { Schema, model } from "mongoose";

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

export default User;