import mongoose from 'mongoose';

const event = new mongoose.Schema(
  {
    eventType: { type: String, required: true, unique: true },
    image: { type: String },
  },
  {
    timestamps: true,
  },
);

const Event = mongoose.model('Event', event);

export default Event;
