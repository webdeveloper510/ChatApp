import  mongoose  from 'mongoose';
import config from '../../config.js';

const userSchema = new mongoose.Schema({
  UserId: String,
  fullName: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  conversations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation',
  }],
});

// module.exports  = mongoose.model('User', userSchema);
export default mongoose.model('User',userSchema);