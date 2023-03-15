const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const User = conn.model('UserCollection',UserSchema)

module.exports = User;