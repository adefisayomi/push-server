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
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db_1 = require("./utils/db");
function initServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const app = express();
            const PORT = process.env.PORT || 4000;
            const api_path = '/api/v1/';
            app.use(express.json());
            app.use(express.urlencoded({ extended: false }));
            app.use(cookieParser());
            app.use(cors());
            app.use(api_path, require('./routes'));
            app.use((_, res) => {
                res.send({
                    success: true,
                    message: null,
                    data: null
                });
            });
            yield new Promise(resolve => {
                app.listen(PORT, () => {
                    resolve(process.env.NODE_ENV !== 'production' && console.log(`Server: ${PORT}`));
                });
            });
            yield (0, db_1.default)();
        }
        catch (err) {
            process.env.NODE_ENV !== 'production' && console.log({ server_error: err.message });
            process.exit(1);
        }
    });
}
initServer();
//# sourceMappingURL=index.js.map