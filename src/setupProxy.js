const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://35.216.81.32:8080',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};