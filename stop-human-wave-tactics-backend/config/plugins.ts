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
  },
  translate: {
    enabled: true,
    config: {
      provider: 'deepl',
      providerOptions: {
        // your API key - required and wil cause errors if not provided
        apiKey: env("DEEPL_API_KEY"),
        // use custom api url - optional
        apiUrl: 'https://api-free.deepl.com',
        apiOptions: {
          // see <https://github.com/DeepLcom/deepl-node#text-translation-options> for supported options.
          // note that tagHandling Mode cannot be set this way. 
          // use with caution, as non-default values may break translation of markdown 
          formality: 'default',
        }
      },
    },
    translatedFieldTypes: [
      'string',
      { type: 'text', format: 'plain' },
      { type: 'richtext', format: 'markdown' },
      'component',
      'dynamiczone',
    ],
    // If relations should be translated (default true)
    translateRelations: true,
  },
  //upload: {
  //  config: {
  //    provider: 'aws-s3',
  //    providerOptions: {
  //      accessKeyId: env('AWS_ACCESS_KEY_ID'),
  //      secretAccessKey: env('AWS_ACCESS_SECRET'),
  //      region: env('AWS_REGION'),
  //      params: {
  //        Bucket: env('AWS_BUCKET'),
  //      },
  //    },
  //    actionOptions: {
  //      upload: {},
  //      uploadStream: {},
  //      delete: {},
  //    },
  //  },
  //},
});
