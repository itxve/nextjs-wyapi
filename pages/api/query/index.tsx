import connection from '@/db';

export default function handler(req, res) {
    var sql = 'SELECT * FROM xuser';
    //查
    connection.connect();
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        res.send(result);
        console.log('------------------------------------------------------------\n\n');
    });
}
