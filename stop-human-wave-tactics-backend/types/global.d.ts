declare namespace NodeJS {
  interface ProcessEnv {
    readonly POSTGRES_HOST: string
    readonly PG_PORT: number
    readonly POSTGRES_DB: string
    readonly POSTGRES_USER: string
    readonly POSTGRES_PASSWORD: string
    readonly DB_SSL: string
    readonly ADMIN_URL: string
    readonly HOST: string
    readonly BACK_PORT: number
    readonly URL: string
    readonly APP_KEYS: string
    readonly API_TOKEN_SALT: string
    readonly ADMIN_JWT_SECRET: string
    readonly JWT_SECRET: string
    readonly TRANSFER_TOKEN_SALT: string
    readonly DEEPL_KEY: string
    readonly BACK_SENTRY_DSN: string
  }
}
