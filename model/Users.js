const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const uri = 'mongodb://127.0.0.1/Users';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const conn = mongoose.createConnection(uri, options);

const User = conn.model('UserCollection',UserSchema)

module.exports = User;