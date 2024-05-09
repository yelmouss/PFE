const express = require("express");
const router = express.Router();
const EffectifController = require("../controllers/EffectifController");

router.get("/EffectifGet", EffectifController.getAllUsers);


module.exports = router;

