const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();
const app = express();
app.use(express.json());

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

const port = 3001;
app.listen(port, () => {
  console.log(`running on port ${port} ${process.env.MAVAR}`);
});
