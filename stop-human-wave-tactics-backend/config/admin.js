module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2e921eb28f911c2bce3bf3e06e66315f'),
  },
  url:env('ADMIN_URL','http://localhost:1337/admin')
});
