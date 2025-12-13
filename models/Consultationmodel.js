import mongoose from "mongoose";

const ConsultationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    businessName: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Consultation", ConsultationSchema);
