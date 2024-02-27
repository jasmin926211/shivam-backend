// import AWS from 'aws-sdk';
// import config from 'config';
import winston from 'winston';
// import WinstonCloudWatch from 'winston-cloudwatch';

class Logger {
  constructor() {
    const transports = [
      new winston.transports.Console({
        level: 'info',
      }),
    ];

    this.winstonLogger = winston.createLogger({
      transports,
    });
  }

  message(message, level = 'info') {
    const allowedLogLevels = ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'];

    if (typeof level !== 'string' || !allowedLogLevels.includes(level)) {
      // eslint-disable-next-line no-param-reassign
      level = 'info';
    }
    this.winstonLogger.log(level, message);
  }

  info(message) {
    this.winstonLogger.log('info', message);
  }

  error(message) {
    this.winstonLogger.log('error', message);
  }

  warn(message) {
    this.winstonLogger.log('warn', message);
  }
}

const logger = new Logger();

export default logger;
