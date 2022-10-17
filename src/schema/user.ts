import {Schema, model} from "mongoose";

const userSchema = new Schema({
    
    username: {type: String, unique: true, trim: true, lowercase: true},
    password: {type: String, unique: true},
    firstName: String,
    lastName: String

}, {timestamps: true})

module.exports = model('Users', userSchema)