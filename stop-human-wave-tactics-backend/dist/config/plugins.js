"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    graphql: {
        enabled: true,
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: true,
            depthLimit: 25,
            amountLimit: 30,
            apolloServer: {
                tracing: false,
            },
        }
    },
    ckeditor: true,
    seo: { enabled: true },
    sentry: {
        enabled: true,
        config: {
            dsn: process.env.SENTRY_DNS,
            sendMetadata: true,
        }
    }
};
