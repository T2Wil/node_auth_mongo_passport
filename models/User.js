//schema
//model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    fullName: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('User',UserSchema);