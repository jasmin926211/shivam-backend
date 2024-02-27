/**
 * This file will consist of database connection to mongoose this connection currently
 * only takes connection string from config but later can be altered as per project requirements
 * to have other configurations externalized such as connection pool size etc.
 */

import config from 'config';
import mongoose from 'mongoose';

import logger from '#/config/logger';

const mongoURI = `${config.get('dbUrl')}/${config.get('dbName')}`;

const mongoConnection = () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    logger.info(`Mongoose connected to database`);
  });

  mongoose.connection.on('error', (err) => {
    logger.error(`Failed to connect mongoose to database due to error ${err.stack || err}`);
    logger.error(`Terminating server due to error while connecting to the database`);
  });

  mongoose.connection.on('disconnected', () => {
    logger.info(`Mongoose disconnected from database`);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      logger.error(`Mongoose connection terminated due to termination of application`);
    });
    process.exit();
  });
};

export default mongoConnection;
