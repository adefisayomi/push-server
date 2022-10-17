"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const socialAccountSchema = new mongoose_1.Schema({
    username: { type: String, unique: true, trim: true, lowercase: true },
    _id: { type: mongoose_1.Schema.Types.ObjectId, unique: true }
}, { timestamps: true });
module.exports = (0, mongoose_1.model)('SocialAccount', socialAccountSchema);
//# sourceMappingURL=socialAccount.js.map