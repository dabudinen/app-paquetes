import { Schema, model } from 'mongoose';
import Users from '../users/schema';

const packageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: Users,
    },
    arrivedBefore24h: { type: Boolean, default: false },
    width: Number,
    height: Number,
    depth: Number,
    state: {
      type: String,
      enum: ['guardado', 'cancelado', 'cumplido'],
      default: 'guardado',
    },
    pickupDate: Date,
    fromCity: String,
    fromAddress: String,
    toCity: String,
    toAddress: String,
    toRecipient: String,
    toRecipientPhone: String,
    toRecipientId: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Package', packageSchema);
