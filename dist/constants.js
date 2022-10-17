"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMessage = void 0;
function errorMessage(message) {
    if (process.env.NODE_ENV !== 'production') {
        console.log(({
            success: false,
            message: message,
            data: null
        }));
    }
    return ({
        success: false,
        message: message,
        data: null
    });
}
exports.errorMessage = errorMessage;
//# sourceMappingURL=constants.js.map