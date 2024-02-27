import { faker } from '@faker-js/faker';
import { Seeder } from 'mongoose-data-seed';

import Event from '../src/models/Event';
import { seedEvents } from './utilities';

class EventSeeder extends Seeder {
  async shouldRun() {
    return true;
  }

  async run() {
    // Bulk insert the events from the JSON array
    return Event.insertMany(seedEvents);
  }
}

export default EventSeeder;
