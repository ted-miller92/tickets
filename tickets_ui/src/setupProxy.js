const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(
        '/code',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5000',
            changeOrigin: true,
            pathRewrite: {
                '^/code' : '/'
            }
        })
    );

    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://127.0.0.1:3000',
            changeOrigin: true
        })
    );
};