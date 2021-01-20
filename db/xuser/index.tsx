import { execute } from '@/db';
export type Xuser =
    | {
          id?: number;
          account: string;
          reallname: string;
          password: string;
          mail?: string;
          phone?: string;
      }
    | undefined;

export function query(P: Xuser | []) {
    var sql = 'SELECT * FROM xuser';
    return execute(sql, P);
}
export function insert(parms: Xuser) {
    var sql = 'INSERT INTO xuser VALUES(null,#account,#reallname,#password,#mail,#phone)';
    return execute(replace(sql, parms), []);
}

function replace(sql: string, obj: { [key: string]: any } | {} | any): string {
    if (Object.keys.length <= 0) {
        return sql;
    }
    for (let key in obj) {
        sql = sql.replace(`#${key}`, convertType(obj[key]));
    }
    console.log('sql', sql);

    return sql;
}

function convertType(o: any) {
    console.log("typeof o === 'string'", typeof o === 'string');
    if (typeof o === 'string') {
        return `'${String(o)}'`;
    }
    return 'null';
}
function transaction(params) {}
