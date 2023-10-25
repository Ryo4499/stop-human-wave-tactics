import fs from "fs"
export default ({ env }) => ({
  host: env("HOST"),
  port: env.int("BACK_PORT"),
  url: env("URL"),
  app: {
    keys: fs.readFileSync(env("APP_KEYS"),"utf8").replace("\n","").split(","),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
