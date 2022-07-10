module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'stop_human_wave_tactics_db'),
      user: env('DATABASE_USERNAME', 'ar44'),
      password: env('DATABASE_PASSWORD', 'jfl3adjfpw3wjio33298jcfxlll'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
