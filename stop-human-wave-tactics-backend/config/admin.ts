export default ({ env }) => ({
  url: env('ADMIN_URL'),
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
});
