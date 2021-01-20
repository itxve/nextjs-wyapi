import mysql, { Pool, PoolConnection } from 'mysql2';
import { type } from 'os';

var pool: Pool = mysql.createPool({
    connectionLimit: 5,
    host: 'sql.wsfdb.cn',
    user: 'itxvems',
    password: 'itxve',
    database: 'itxvems'
});

/**
 *  通用查询接口
 * @param S  Sql
 * @param P  Parms
 * @param C  callback
 */
export function execute(S: string, P: any | any[] | { [param: string]: any }) {
    return pool.promise().execute(S, P);
}
