import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    brandName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    brandDescription: { type: String },
    targetAudience: { type: String },
    websiteGoal: { type: String },
    siteSections: { type: String },
    brandAssets: { type: String },
    styleInspiration: { type: String },
    features: { type: [String], default: [] },
    timeline: { type: String },
    notes: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Brand", BrandSchema);
