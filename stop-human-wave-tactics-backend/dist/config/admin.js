"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    url: process.env.ADMIN_URL,
    auth: {
        secret: process.env.ADMIN_JWT_SECRET,
    },
};
