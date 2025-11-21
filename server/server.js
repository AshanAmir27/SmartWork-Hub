require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoute = require("./routes/authRoutes");

app.use("/api/v1/user", authRoute);

app.use("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
