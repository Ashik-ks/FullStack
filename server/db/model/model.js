const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

let user = new mongoose.Schema({
    name: {
        type :String,
        // required : true,
    },
    email: {
        type :String,
        // required : true,
    },
    password: {
        type :String,
        // required : true,
    },
    image: {
        type :String,
        // required : true,
    },
    joiningDate: {
        type :String,
        // required : true,
    },
    userType : {
        type : String,
    },
    loginCount: {
        type: Number,
        default: 0, // Default value set to 0
    },
    password_token: {
        type : String,
    }
   
    
})

const User = mongoose.model('users', user);
module.exports = { users: User };