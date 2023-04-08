export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env('POSTGRES_HOST'),
      port: env.int('POSTGRES_PORT'),
      database: env('POSTGRES_DB'),
      user: env('POSTGRES_USER'),
      password: env('POSTGRES_PASSWORD'),
      ssl: env.bool('DB_SSL', false),
    },
  },
});
