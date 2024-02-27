import config from 'config';
import mongoose from 'mongoose';

import Category from './seeders/category.seeder';
import Event from './seeders/event.seeder';

const mongoURI = `${config.get('dbUrl')}/${config.get('dbName')}`;

if (config.get('nodeEnv') !== 'dev') {
  throw new Error('Database seeder can run only in local mode');
}

/**
 * Seeders List
 * order is important
 * @type {Object}
 */

export const seedersList = {
  Category,
  Event,
};

/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () => mongoose.connect(mongoURI, { useNewUrlParser: true });

/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
