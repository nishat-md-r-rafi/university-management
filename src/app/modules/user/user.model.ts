import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import CryptoJS from 'crypto-js';
import config from '../../config';

// define user schema
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// hash the password before saving it
userSchema.pre('save', function (next) {
  this.password = CryptoJS.AES.encrypt(
    this.password,
    config.pass_key as string,
  ).toString();
  next();
});

// create model
export const User = model<TUser>('User', userSchema);
