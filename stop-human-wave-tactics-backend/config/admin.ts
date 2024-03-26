import fs from "fs"
export default ({ env }) => {
  const secret = fs.readFileSync(env('ADMIN_JWT_SECRET'), "utf8").replace("\n", "")
  const apiTokenSalt = fs.readFileSync(env('API_TOKEN_SALT'), "utf8").replace("\n", "")
  const transferSalt = fs.readFileSync(env('TRANSFER_TOKEN_SALT'), "utf8").replace("\n", "")
  return {
    url: env('ADMIN_URL'),
    auth: {
      secret: secret
    },
    apiToken: {
      salt: apiTokenSalt,
    },
    transfer: {
      token: {
        salt: transferSalt
      },
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  }
};
