import mongoose from "mongoose";

const cookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    specialty: [{
      type: String,
      required: true
    }],
    experience: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      default: 0
    },
    orders: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }],
    totalTip: {
      type: Number,
      default: 0
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });
  
  const Cook = mongoose.model('Cook', cookSchema);

  export default Cook