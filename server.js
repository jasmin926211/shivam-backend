import config from 'config';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import mongoConnection from '#/connections';
import controllers from '#/controllers';
import logger from '#/logger';
import { errorHandling, resourceNotFound } from '#/middlewares';

console.log('config ====>:', config);

dotenv.config();

mongoConnection();

const app = express();
const server = require('http').createServer(app);

const corsOptions = {
  exposedHeaders: 'Content-Disposition',
};

app.use(cors(corsOptions));

// Parse application/json
app.use(express.json());
app.use(cors());
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Setting middleware for static resources
app.use(express.static('public'));

// Application health endpoint
app.get('/health', (req, res) => {
  const healthStatus = { status: 'UP' };

  if (mongoose.connection.readyState === 0) healthStatus.status = 'DOWN';
  res.send(healthStatus);
});

// Loading all the routes
app.use('/v1', controllers);

app.use(resourceNotFound);

// Default 500 is returned if the route is not available
app.use(errorHandling);

// Function to start express server
function startServer() {
  return server.listen(config.get('port'), () => {
    logger.info(`Shivam backend running on port ${config.get('port')} environment is ${config.get('nodeEnv')}`);
  });
}

// This function is not used much, it can be used in test-cases when server is mocked
function stopServer() {
  server.close(() => {
    process.exit();
  });
}

// Start the server
startServer();

/**
 *  We are exporting start and stop server so that this
 * can be accessed by test cases to mock the server
 * */
export default {
  startServer,
  stopServer,
};
