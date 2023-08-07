export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("POSTGRES_HOST"),
      port: env.int("POSTGRES_PORT"),
      database: env("POSTGRES_DATABASE"),
      user: env("POSTGRES_USER"),
      password: env("POSTGRES_PASSWORD"),
      schema: env("DATABASE_SCHEMA"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
