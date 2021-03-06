export default {
    github: {
        // REDIRECT_URL: 'http://localhost:3000',
        // GETACCESSTOKEN: 'http://localhost:3000/api/auth',
        // AUTHORIZE: `https://github.com/login/oauth/authorize?scope=user&client_id=d9fa9dd33e73f65a0a61&redirect_uri=http://localhost:3000`
        REDIRECT_URL: 'https://api.itxve.cn',
        GETACCESSTOKEN: 'https://api.itxve.cn/api/auth',
        AUTHORIZE: `https://github.com/login/oauth/authorize?scope=user&client_id=d9fa9dd33e73f65a0a61&redirect_uri=https://api.itxve.cn`
    },
    PROXYAPI: 'https://api.itxve.cn/api/proxy',
    USERINFO: 'userinfo'
};
