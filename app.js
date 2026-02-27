require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

// DB Connection

// Maker the DataBase connection with ASync / AWAIt
async function connectDB() {
    if (mongoose.connection.readyState >= 1) {  
        console.log('MongoDB done');
        return;
    }
    try {
        await mongoose.connect('mongodb://localhost:27017/micro');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectDB() ; // define the connection function

app.use("/api", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
