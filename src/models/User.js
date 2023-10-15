const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, 
        unique: {value: true, message: 'Email already exists!'}},
    password: {type: String, required: true},
});

userSchema.virtual('repeatPassword').set(function(value) {
    if(value !== this.password){
        throw new Error('Password missmatch!');
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;