import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  _id: Schema.Types.ObjectId,
  authorName: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
})

export const message = mongoose.model('Message', messageSchema);