export default ({ env }) => ({
  host: env('HOST'),
  port: env.int('BACK_PORT'),
  url: env('URL'),
  app: {
    keys: String(env('APP_KEYS')).split(","),
  },
});
