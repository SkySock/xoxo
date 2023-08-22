import type { Knex } from "knex";
import path from "path";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: process.env.POSTGRES_HOST,
      port: +(process.env.POSTGRES_PORT || 5432),
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, './database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, './database/seeds'),
    }
  },

};

export default config;
