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

const KeyFeatureSchema = new mongoose.Schema({
  icon: String,
  text: String
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tagline: { type: String },
  description: { type: String },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  badge: { type: String },
  colors: { type: [String] },
  features: { type: [String] },
  keyFeatures: { type: [KeyFeatureSchema] },
  images: { type: ImageSchema },
  specs: { type: SpecSchema },
  stock: { type: Number, default: 0 },
  status: { type: String, default: 'Active' },
  image: { type: String },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
