export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 25,
      amountLimit: 30,
    }
  },
  ckeditor: true,
  seo: { enabled: true },
  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DNS'),
      sendMetadata: true,
    }
  }
});
