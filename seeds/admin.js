const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

const admin = {
    fullName: process.env.ADMIN_FULLNAME,
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD
}

const newUser = new User(admin);
newUser.save();

module.exports = newUser;