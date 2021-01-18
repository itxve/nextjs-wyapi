import mysql, { Pool } from 'mysql';

var pool: Pool = mysql.createPool({
    connectionLimit: 5,
    host: 'sql.wsfdb.cn',
    user: 'itxvems',
    password: 'itxve',
    database: 'itxvems'
});

/**
 *
 * @param s  Sql
 * @param c  callback
 */
function query(s, c) {
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query('SELECT something FROM sometable', function (error, results, fields) {
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });
}

export default { query };
