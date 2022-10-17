import {Schema, model} from "mongoose";

const socialAccountSchema = new Schema({
    username: {type: String, unique: true, trim: true, lowercase: true},
    _id: {type: Schema.Types.ObjectId, unique: true}
}, {timestamps: true})

module.exports = model('SocialAccount', socialAccountSchema)