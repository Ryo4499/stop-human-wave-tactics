module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "db"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "stop_human_wave_tactics_db"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "secret"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
