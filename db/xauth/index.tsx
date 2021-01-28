const SQL = {
    list: 'SELECT * FROM xauth',
    one: 'SELECT * FROM xauth where type=? and thid =?',
    save: 'INSERT INTO xauth VALUES(#uid,#type,#thid)'
};

export default { SQL };
