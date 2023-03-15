const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')
//const User = require('./model/Users')


const uri = 'mongodb://127.0.0.1/Users';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// mongoose.connect(uri, options)
//  .then(()=>{console.log('op completed')})
//  .catch((err)=>{console.log('error is',err)})

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const conn = mongoose.createConnection(uri, options);

const User = conn.model('UserCollection',UserSchema)
// conn.on('connected', () => {
//   console.log('Database connected');
// });
// conn.on('error', (err) => {
//   console.error('Database connection error', err);
// });

async function create(){
    try{
    await User.create({
    name:'daniel ricciardo',
    age:36
});
console.log('data saved')
}
catch(err){
    console.log('erros iss',err)
}}
create()

async function deletee(){
    try{
        await User.deleteMany({age:52 || 522})

    }
    catch{
        console.log('err')
    }
}

deletee()





// module.exports = User;
