import fs from "fs"

export default ({ env }) => {
  const keys = fs.readFileSync(env("APP_KEYS"), "utf8").replace("\n", "").split(",")
  return {
    host: env("HOST"),
    port: env.int("BACK_PORT"),
    url: env("URL"),
    app: {
      keys: keys,
    },
    webhooks: {
      populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    },
  }
};
