const User = require('../models/User.js');
const bcrypt = require('bcrypt');

exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
    const user = await User.findOne({email});

    //validate user
    if(!user){
        throw new Error('invalid email or password!');
    }

    //validate password
    const isValid = await bcrypt.compare(password, user.password);
    
    if(!isValid){
        throw new Error('invalid email or password!');
    }

    return user;
}