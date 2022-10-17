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
const express_1 = require("express");
const route = (0, express_1.Router)();
const linkedin_1 = require("../controllers/linkedin");
const constants_1 = require("../constants");
route.get('/callback', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const { code, state, error, error_description } = query;
    res.send(yield (0, linkedin_1.handleTokenCallBack)(code, state, error, error_description));
}));
route.get('/get-auth', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const baseURL = 'https://www.linkedin.com/oauth/v2/authorization?scope=r_liteprofile%20r_emailaddress%20w_member_social&';
        const queryParams = new URLSearchParams({
            response_type: 'code',
            redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
            state: process.env.LINKEDIN_STATE_SECRET,
            client_id: process.env.LINKEDIN_CLIENT_ID
        });
        const authUri = baseURL + queryParams;
        res.redirect(authUri);
    }
    catch (err) {
        res.send((0, constants_1.errorMessage)(err.message));
    }
}));
module.exports = route;
//# sourceMappingURL=linkedin.js.map