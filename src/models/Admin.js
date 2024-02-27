import mongoose from 'mongoose';

// Define your admin schema and model (adjust as per your requirements)
const admin = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Admin = mongoose.model('Admin', admin);

export default Admin;
