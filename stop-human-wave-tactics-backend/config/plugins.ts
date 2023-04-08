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
  deepl: {
    enabled: true,
    config: {
      // your DeepL API key
      apiKey: env("DEEPL_API_KEY"),
      // whether to use the free or paid api, default true
      freeApi: true,
      // Which field types are translated (default string, text, richtext, components and dynamiczones)
      translatedFieldTypes: [
        'string',
        'text',
        'richtext',
        'component',
        'dynamiczone',
      ],
      // If relations should be translated (default true)
      translateRelations: true,
      // You can define a custom glossary to be used here (see https://www.deepl.com/docs-api/managing-glossaries/)
      glossaryId: 'customGlossary',
    },
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
