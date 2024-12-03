const pgp = require('pg-promise');
require('dotenv').config();

const [PG_HOST, PG_USER, PG_DATABASE, PG_PORT] = process.env;

const cn = {
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DATABASE,
    user: PG_USER
}
//The connection object connects our server to the database so it can request and receive the data the client is requesting

const db = pgp(cn);



module.exports = db;