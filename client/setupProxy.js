const { createProxyMiddleware } = require('http-proxy-middleware');

function serverProxy() {
  return [
    createProxyMiddleware('/auth/google', {
      target: 'https://solar-system-h7ph.onrender.com/',
      changeOrigin: true,
    }),
    createProxyMiddleware('/api/', {
      target: 'https://solar-system-h7ph.onrender.com/',
      changeOrigin: true,
    }),
  ];
}

module.exports = serverProxy;
