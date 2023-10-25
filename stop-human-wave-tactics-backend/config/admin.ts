import fs from "fs"
export default ({ env }) => ({
  url: env('ADMIN_URL'),
  auth: {
    secret: fs.readFileSync(env('ADMIN_JWT_SECRET'),"utf8").replace("\n",""),
  },
  apiToken: {
    salt: fs.readFileSync(env('API_TOKEN_SALT'),"utf8").replace("\n",""),
  },
  transfer: {
    token: {
      salt: fs.readFileSync(env('TRANSFER_TOKEN_SALT'),"utf8").replace("\n",""),
    },
  },
});
