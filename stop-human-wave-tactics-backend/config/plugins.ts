import fs from "fs";

export default ({ env }) => {
  const dsn = fs.readFileSync(env("BACK_SENTRY_DSN"), "utf8").replace("\n", "")
  const deeplApiKey = fs.readFileSync(env("DEEPL_API_KEY"), "utf8").replace("\n", "")
  return {
    graphql: {
      enabled: true,
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: env("NODE_ENV") === "development" ? true : false,
        depthLimit: 25,
        amountLimit: 30,
      },
    },
    seo: { enabled: true },
    sentry: {
      enabled: true,
      config: {
        dsn: dsn,
        sendMetadata: true,
      },
    },
    translate: {
      enabled: true,
      config: {
        provider: "deepl",
        providerOptions: {
          // your API key - required and wil cause errors if not provided
          apiKey: deeplApiKey,
          // use custom api url - optional
          apiUrl: "https://api-free.deepl.com",
          localeMap: {
            // use uppercase here!
            EN: "EN-US",
          },
          apiOptions: {
            // see <https://github.com/DeepLcom/deepl-node#text-translation-options> for supported options.
            // note that tagHandling Mode cannot be set this way.
            // use with caution, as non-default values may break translation of markdown
            formality: "prefer_more"
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
  }
};
