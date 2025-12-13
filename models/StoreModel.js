import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    businessName: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String },
    estimatedProducts: { type: String },
    productAssets: { type: String },
    paymentMethods: { type: String },
    deliveryRegions: { type: String },
    branding: { type: String },
    styleInspiration: { type: String },
    timeline: { type: String },
    notes: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Store", StoreSchema);
