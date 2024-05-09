const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
//Database connexion test
mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("DATABASE Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.status(200).json({ data: "Hello World" });
});


const UserRoutes = require('./routes/UserRoutes')
app.use('/api', UserRoutes)

const EffectifRoutes = require('./routes/EffectifRoutes')
app.use('/api', EffectifRoutes)

const port = 3001;
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
