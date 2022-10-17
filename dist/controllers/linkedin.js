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
exports.createShare = exports.handleTokenCallBack = void 0;
const axios_1 = require("axios");
const constants_1 = require("../constants");
function handleTokenCallBack(code, state, error, error_description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (error)
                throw new Error(error_description);
            if (!code || !state || state !== process.env.LINKEDIN_STATE_SECRET) {
                throw new Error('invalid query parameters');
            }
            const queryParams = {
                grant_type: 'authorization_code',
                code,
                redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
                client_id: process.env.LINKEDIN_CLIENT_ID,
                client_secret: process.env.LINKEDIN_CLIENT_SECRET
            };
            const tokenUri = 'https://www.linkedin.com/oauth/v2/accessToken';
            const data = yield axios_1.default.post(tokenUri, null, {
                params: queryParams,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const accessToken = yield data.data;
            return ({
                success: true,
                message: 'access token',
                data: accessToken
            });
        }
        catch (err) {
            return (0, constants_1.errorMessage)(err.message);
        }
    });
}
exports.handleTokenCallBack = handleTokenCallBack;
function createShare() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
        }
        catch (err) {
            return (0, constants_1.errorMessage)(err.message);
        }
    });
}
exports.createShare = createShare;
//# sourceMappingURL=linkedin.js.map