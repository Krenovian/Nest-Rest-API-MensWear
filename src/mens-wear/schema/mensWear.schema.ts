import * as mongoose from 'mongoose';

export const mensWearSchema = new mongoose.Schema({
  nameOfProduct: String,
  category: String,
  price: Number,
  manufacturer: String,
});
