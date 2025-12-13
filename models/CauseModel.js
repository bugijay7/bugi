import mongoose from 'mongoose';

const CauseSchema = new mongoose.Schema(
  {
    orgName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    mission: { type: String },
    targetAudience: { type: String },
    sections: { type: [String], default: [] },
    branding: { type: String },
    inspiration: { type: String },
    timeline: { type: String },
    extras: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model('Cause', CauseSchema);
