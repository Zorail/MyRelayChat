import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
});

export const user = mongoose.model('User', userSchema);