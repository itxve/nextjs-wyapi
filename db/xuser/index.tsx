import { execute, Ireplace, transaction, PConnection } from '@/db';
import xauth from '../xauth';
import type { Db } from '@/types/Itxve';
import { ResultSetHeader } from 'mysql2';

const SQL = {
    save: 'INSERT INTO xuser VALUES(null,#account,#reallname,#password,#mail,#phone)',
    one: 'select * from xuser where id=?'
};

export function query(P: Db.Xuser | []) {
    var sql = 'SELECT * FROM xuser';
    return execute(sql, P);
}

//注册
export async function register(auth: Db.UserDto) {
    const result = await transaction(async (con: PConnection) => {
        const [row] = await con.query(xauth.SQL.one, [auth?.type, auth?.thid]);
        const count = (row as any)?.[0];
        if (!count) {
            const user: Db.Xuser = {
                account: auth?.login || '',
                reallname: auth?.name || '',
                password: '123456',
                mail: '',
                phone: ''
            };
            const rsh = await pExceute<ResultSetHeader>(con, SQL.save, user);
            user.id = rsh.insertId;
            auth.uid = rsh.insertId;
            await con.execute(Ireplace(xauth.SQL.save, auth));
            return user;
        }
        const [retUser] = await con.query(SQL.one, count.uid);
        return retUser as ResultSetHeader;
    });

    return result;
}

//增强类型
export async function pExceute<T>(con: PConnection, sql: string, parms: any): Promise<T> {
    const [row] = await con.execute(Ireplace(sql, parms));
    return Promise.resolve((row as any) as T);
}
