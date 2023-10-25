import fs from "fs";
export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: env("MODE") === "DEV" ? true : false,
      depthLimit: 25,
      amountLimit: 30,
    },
  },
  ckeditor: true,
  seo: { enabled: true },
  sentry: {
    enabled: true,
    config: {
      dsn: fs.readFileSync(env("SENTRY_DSN"), "utf8").replace("\n", ""),
      sendMetadata: true,
    },
  },
  "content-versioning": {
    enabled: true,
  },
  migrations: {
    enabled: true,
    config: {
      autoStart: true,
      migrationFolderPath: "migrations",
    },
  },
  "local-image-sharp": {
    config: {
      maxAge: 31536000, // which corresponds to 1 year: 60 seconds × 60 minutes × 24 hours × 365 days = 31536000 seconds.
    },
  },
  translate: {
    enabled: true,
    config: {
      provider: "deepl",
      providerOptions: {
        // your API key - required and wil cause errors if not provided
        apiKey: fs.readFileSync(env("DEEPL_API_KEY"), "utf8").replace("\n", ""),
        // use custom api url - optional
        apiUrl: "https://api-free.deepl.com",
        apiOptions: {
          // see <https://github.com/DeepLcom/deepl-node#text-translation-options> for supported options.
          // note that tagHandling Mode cannot be set this way.
          // use with caution, as non-default values may break translation of markdown
          formality: "default",
        },
      },
    },
    translatedFieldTypes: [
      "string",
      { type: "text", format: "plain" },
      { type: "richtext", format: "markdown" },
      "component",
      "dynamiczone",
    ],
    // If relations should be translated (default true)
    translateRelations: true,
  },
});
