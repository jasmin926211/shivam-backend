import mongoose from 'mongoose';

const category = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    gujaratiName: { type: String },
    image: { type: String },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

const Category = mongoose.model('Category', category);

export default Category;
