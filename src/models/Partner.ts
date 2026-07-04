import mongoose from 'mongoose';

const PartnerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please provide your full name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
    },
    companyName: {
      type: String,
      required: [true, 'Please provide your company name'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone number'],
    },
    partnerType: {
      type: String,
      enum: ['Distributor', 'Reseller', 'Installer', 'Security Company', 'Other'],
      required: [true, 'Please select a partner type'],
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Partner || mongoose.model('Partner', PartnerSchema);
