import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    profession: { type: String },
    portfolioGoal: { type: String },
    workTypes: { type: String },
    sections: { type: [String], default: [] },
    designPrefs: { type: String },
    timeline: { type: String },
    notes: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Portfolio", PortfolioSchema);
