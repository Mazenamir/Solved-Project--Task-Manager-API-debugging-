const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,  //==>  it should boolen from "String" 
    default: false, // it Mustn't be string like this "false"
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
