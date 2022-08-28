const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;