import fs from "fs"
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
      dsn: fs.readFileSync(env('SENTRY_DSN'),"utf8").replace("\n",""),
      sendMetadata: true,
    }
  },
  content-versioning: {
		enabled:  true,
	},
  chartbrew: true,
  localazy: {
    config: {
      /**
       * both options may help guard against DoS attacks
       * if `populateMaxDepth` < 5; the Localazy Strapi Plugin may not work as expected
       */
      populateDefaultDepth:5, // default is 5
      populateMaxDepth: 10, // default is 10
    },
  },
  translate: {
    enabled: true,
    config: {
      provider: 'deepl',
      providerOptions: {
        // your API key - required and wil cause errors if not provided
        apiKey: fs.readFileSync(env("DEEPL_API_KEY"),"utf8").replace("\n",""),
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
