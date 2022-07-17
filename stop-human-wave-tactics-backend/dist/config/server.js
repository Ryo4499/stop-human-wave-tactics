"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    url: process.env.URL,
    app: {
        keys: process.env.APP_KEYS.split(","),
    },
};
