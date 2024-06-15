# Stop Human Wave Tactics Frontend

## About environment variables

please refer to .env.sample

```env
PAGESIZE=6
FRONT_PORT=
GOOGLE_ADSENSE_ENABLED=
FRONT_SENTRY_DSN=
NEXT_PUBLIC_DOMAIN=
NEXT_PUBLIC_BACKEND_URL=
NEXT_PUBLIC_GAN_ID=
# Google Adsense
NEXT_PUBLIC_GAD_ID=
# Tag Manager
NEXT_PUBLIC_GTM_ID=
```

## GraphQL Type Auto Generate 

1. schema definition and .graphql and .ts files are placed in graphql directory
2. Download SDL from playground and place it in the root directory
3. Run the following command (type declarations are output to ./types/graphql_res.ts)

```bash
yarn run graphql-codegen
```

