import mysql, { Pool } from 'mysql2';
import { PoolConnection } from 'mysql2/promise';

var pool: Pool = mysql.createPool({
    connectionLimit: 5,
    host: 'sql.wsfdb.cn',
    user: 'itxvems',
    password: 'itxve',
    database: 'itxvems'
});

/**
 *  通用sql执行接口
 * @param S  Sql
 * @param P  Parms
 * @param C  callback
 */
export function execute(S: string, P?: any | any[] | { [param: string]: any }) {
    return pool.promise().execute(S, P);
}

/**
 *
 * @param sql 添加替换占位符
 * @param obj
 * @returns
 */
export function Ireplace(sql: string, obj: { [key: string]: any } | {} | any): string {
    if (Object.keys.length <= 0) {
        return sql;
    }
    for (let key in obj) {
        sql = sql.replace(`#${key}`, _IconvertType(obj[key]));
    }
    console.log('excute Insert sql=======>', sql);
    return sql;
}

function _IconvertType(o: any) {
    if (typeof o === 'string') {
        return `'${String(o)}'`;
    }
    if (typeof o === 'number') {
        return `${Number(o)}`;
    }
    return '';
}

/**
 * 执行事物
 * @param fuc
 */
export async function transaction(fuc: (connect: PoolConnection) => any): Promise<any> {
    var connection;
    var result;
    try {
        connection = await pool.promise().getConnection();
        await connection.beginTransaction();
        console.log('---------beginTransaction---------');
        result = await fuc.call(null, connection);
        await connection.commit();
        console.log('---------commitTransaction---------');
    } catch (error) {
        if (connection) {
            await connection.rollback();
            console.log('---------rollbackTransaction---------');
        }
    } finally {
        if (connection) {
            connection.release();
            console.log('---------connection.release---------');
        }
    }
    return Promise.resolve(result);
}

export type PConnection = PoolConnection;
