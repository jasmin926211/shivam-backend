import mongoose from 'mongoose';

// Define your admin schema and model (adjust as per your requirements)
const customer = new mongoose.Schema(
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
    phoneDialCode: {
      type: String,
      default: '+91',
    },
    phoneNumber: { type: String, required: true },
    eventAddress: { type: String, required: true },
    eventStartDate: { type: Date, required: true },
    eventEndDate: { type: Date, required: true },
    events: [
      {
        eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
        eventDate: { type: Number, required: true },
        selectedMenuItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }],
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Customer = mongoose.model('Customer', customer);

export default Customer;
