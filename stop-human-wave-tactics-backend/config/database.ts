export default {
  connection: {
    client: "postgres",
    connection: {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      ssl: (process.env.DB_SSL.toLocaleLowerCase() == "true"),
    },
  },
};
