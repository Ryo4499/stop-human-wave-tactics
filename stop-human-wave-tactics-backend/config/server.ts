export default ({ env }) => ({
  host: env('HOST'),
  port: parseInt(env('PORT'), 10),
  url: env('URL'),
  app: {
    keys: env('APP_KEYS').split(","),
  },
});
