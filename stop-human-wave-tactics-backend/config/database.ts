export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env('POSTGRES_HOST'),
      port: parseInt(env('POSTGRES_PORT'), 10),
      database: env('POSTGRES_DB'),
      user: env('POSTGRES_USER'),
      password: env('POSTGRES_PASSWORD'),
      ssl: (env('DB_SSL').toLowerCase() == "true"),
    },
  },
});
