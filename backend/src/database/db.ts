import knex from "knex";

import config from "../knexfile";

const env = process.env.NODE_ENV || "development";

const configOptions = config[env];

export default knex(configOptions);