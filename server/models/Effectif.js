// Effectif Model
const mongoose = require("mongoose");

const EffectifSchema = new mongoose.Schema(
  {
    Matricule: {
      type: Number,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    entity: {
        type: String,
        required: true,
    },
    fonction: {
        type: String,
        default : null,
    },
    Affectation: {
        type: String,
        default : null,
    },
  },
  {
    timestamps: true,
  }
);

const Effectif = mongoose.model("Effectif", EffectifSchema);

module.exports = Effectif;
