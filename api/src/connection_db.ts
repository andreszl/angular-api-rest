import mysql from 'promise-mysql';

import config from "./config_db";

const pool = mysql.createPool(config.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('The database has been connected!');
    });


export default pool;