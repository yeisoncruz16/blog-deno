import { connect, config } from "../deps.ts";

const env = config();

const db = await connect({
    type : "mysql",
    database: env.DATABASE_DATABASE,
    hostname:env.DATABASE_HOST,
    port : parseInt(env.DATABASE_PORT),
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
});

export default db;