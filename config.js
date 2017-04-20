const config = {
  port: process.env.PORT || 3000,
  hostname: process.env.HOSTNAME || 'localhost',
  apiUrl: process.env.API_URL || 'http://localhost::3001',
  nodeEnv: process.env.NODE_ENV || 'development',
};

module.exports = config;
