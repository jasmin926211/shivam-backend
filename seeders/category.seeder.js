import { faker } from '@faker-js/faker';
import { Seeder } from 'mongoose-data-seed';

import Category from '../src/models/Category';
import { seedCategories } from './utilities';

class CategorySeeder extends Seeder {
  async shouldRun() {
    return true;
  }

  async run() {
    // Bulk insert the categories from the JSON array
    return Category.insertMany(seedCategories);
  }
}

export default CategorySeeder;
