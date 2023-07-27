const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(
        '/promo_code',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {
                '^/promo_code' : '/'
            }
        })
    );

    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true
        })
    );
};