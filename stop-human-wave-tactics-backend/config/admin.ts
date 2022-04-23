export default ({ env }) => ({
  url: env('ADMIN_URL', 'http://localhost/admin'),
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2d72c040ee76459417b9fc46b2415025'),
  },
});
