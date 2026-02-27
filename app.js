require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

// DB Connection

// Maker the DataBase connection with ASync / AWAIt
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
     console.log("MongoDB Connected")
     
    } catch (error) {  // handling the Error

    
    console.log("DB Connection Error:", err);
    
  }
}

app.use("/api", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
