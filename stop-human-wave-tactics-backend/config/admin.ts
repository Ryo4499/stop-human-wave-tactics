export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('ADMIN_URL', 'http://localhost/admin'),
  apiToken: {
    salt: env('API_TOKEN_SALT', 'example-salt')
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'example-token'),
  },
});
