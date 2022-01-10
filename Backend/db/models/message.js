import  mongoose  from 'mongoose';

const messageSchema = new mongoose.Schema({
  text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: Object,
});

export default mongoose.model('Message', messageSchema);
