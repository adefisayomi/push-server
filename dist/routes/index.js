"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
route.use('/linkedin', require('./linkedin'));
module.exports = route;
//# sourceMappingURL=index.js.map