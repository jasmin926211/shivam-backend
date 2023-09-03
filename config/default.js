require('dotenv').config();

export default {
  port: process.env.PORT || 3010,
  nodeEnv: process.env.NODE_ENV,
  logLevel: process.env.LOGLEVEL || 'debug',
  dbUrl: process.env.DB_URL,
  dbName: process.env.DB_NAME,
  tokenSecretKey: process.env.TOKEN_SECRET_KEY,
};
