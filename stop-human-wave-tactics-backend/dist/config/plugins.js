"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    graphql: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
            tracing: false,
        },
    },
};
