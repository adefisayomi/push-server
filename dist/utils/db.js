"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_1 = require("../constants");
const connection = {
    isConnected: false
};
function initDBConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbConnected = yield (0, mongoose_1.connect)(process.env.DATABASE_URI);
            connection.isConnected = dbConnected.connection.readyState;
            process.env.NODE_ENV !== 'production' && console.log(`Database conn: ${connection.isConnected}`);
            return ({
                success: true,
                message: 'database connected',
                data: connection.isConnected
            });
        }
        catch (err) {
            return (0, constants_1.errorMessage)(err.message);
        }
    });
}
exports.default = initDBConnect;
//# sourceMappingURL=db.js.map