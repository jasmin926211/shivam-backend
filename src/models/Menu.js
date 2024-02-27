import mongoose from 'mongoose';

const menu = new mongoose.Schema(
  {
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, required: true },
    gujaratiName: { type: String },
    image: { type: String },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

const Menu = mongoose.model('Menu', menu);

export default Menu;
