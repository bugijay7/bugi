import ConsultationModel from "../models/Consultationmodel.js";

/* =========================
   GET ALL CONSULTATIONS
========================= */
export const getConsultations = async (req, res) => {
  try {
    const consultations = await ConsultationModel.find().sort({ createdAt: -1 });
    res.status(200).json(consultations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch consultations" });
  }
};

/* =========================
   GET CONSULTATION BY ID
========================= */
export const getConsultationById = async (req, res) => {
  try {
    const consultation = await ConsultationModel.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    res.status(200).json(consultation);
  } catch (error) {
    res.status(400).json({ message: "Invalid consultation ID" });
  }
};

/* =========================
   CREATE CONSULTATION
========================= */
export const createConsultation = async (req, res) => {
  try {
    const consultation = new ConsultationModel({
      name: req.body.name,
      businessName: req.body.businessName,
      email: req.body.email,
      phone: req.body.phone,
      description: req.body.description,
    });

    const savedConsultation = await consultation.save();
    res.status(201).json(savedConsultation);
  } catch (error) {
    res.status(400).json({ message: "Failed to create consultation" });
  }
};

/* =========================
   UPDATE CONSULTATION
========================= */
export const updateConsultation = async (req, res) => {
  try {
    const updatedConsultation = await ConsultationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedConsultation) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    res.status(200).json(updatedConsultation);
  } catch (error) {
    res.status(400).json({ message: "Failed to update consultation" });
  }
};

/* =========================
   DELETE CONSULTATION
========================= */
export const deleteConsultation = async (req, res) => {
  try {
    const deletedConsultation = await ConsultationModel.findByIdAndDelete(
      req.params.id
    );

    if (!deletedConsultation) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    res.status(200).json({ message: "Consultation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete consultation" });
  }
};
