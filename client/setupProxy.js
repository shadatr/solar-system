const { createProxyMiddleware } = require('http-proxy-middleware');

function serverProxy() {
  return [
    createProxyMiddleware('/auth/google', {
      target: 'http://localhost:5000/',
      changeOrigin: true,
    }),
    createProxyMiddleware('/api/', {
      target: 'http://localhost:5000/',
      changeOrigin: true,
    }),
  ];
}

module.exports = serverProxy;
