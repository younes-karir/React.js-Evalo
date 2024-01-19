const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname: {
        type: String,
        required: true,
        trim:true
    },
    lname: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim:true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps:true
});

const User = mongoose.model('users', UserSchema);

module.exports = User;