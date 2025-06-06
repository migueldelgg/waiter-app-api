import { model, Schema } from "mongoose"

export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN PRODUCTION', 'DONE'],
    default: 'WAITING',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  products: {
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        default: 1,
        required: true
      }
    }],
    required: true
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  }
}));
