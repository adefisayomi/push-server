"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, unique: true, trim: true, lowercase: true },
    password: { type: String, unique: true },
    firstName: String,
    lastName: String
}, { timestamps: true });
module.exports = (0, mongoose_1.model)('Users', userSchema);
//# sourceMappingURL=user.js.map