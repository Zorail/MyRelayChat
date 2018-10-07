import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const threadSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  isRead: { type: Boolean },
  lastUpdated: { type: Date },
})

export const thread = mongoose.model('Thread', threadSchema);
