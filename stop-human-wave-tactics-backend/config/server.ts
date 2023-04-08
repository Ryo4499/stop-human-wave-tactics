
export default ({ env }) => ({
  host: env('HOST'),
  port: parseInt(env('PORT'), 1337),
  url: env('URL'),
  app: {
    keys: String(env('APP_KEYS')).split(","),
  },
});
