import mongoose from 'mongoose';

const SpecSchema = new mongoose.Schema({
  range: String,
  battery: String,
  grade: String,
  channels: String,
}, { _id: false });

const ImageSchema = new mongoose.Schema({
  white: String,
  black: String,
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  badge: { type: String },
  colors: { type: [String], required: true },
  images: { type: ImageSchema, required: true },
  specs: { type: SpecSchema, required: true },
  stock: { type: Number, default: 0 },
  status: { type: String, default: 'Active' },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
