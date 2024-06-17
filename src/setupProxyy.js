const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://sample.eba-dqpmvh4c.ap-south-1.elasticbeanstalk.com/",
      changeOrigin: true,
    })
  );
};
