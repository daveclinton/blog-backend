export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST"),
      port: env.int("PGPORT"),
      database: env("PGDATABASE"),
      user: env("PGUSER"),
      password: env("PGPASSWORD"),
      schema: env("DATABASE_SCHEMA"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
