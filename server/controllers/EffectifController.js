const Effectif = require('../models/Effectif')


exports.getAllUsers = async (req, res) => {
    try {
      const effectifs = await Effectif.find();
      res.json(effectifs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }