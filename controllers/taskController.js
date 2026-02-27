const Task = require("../models/Task");


// Converting this to ASYNC / AWAIT 
const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ msg: "Title is required" });
    
    const task = await Task.create({title});

    res.status(200).json({ msg: "Task Created", data: task });
    
  } catch (error) { // Adding catch for the error
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

// Converting this to ASYNC / AWAIT 

const getTasks = async (req, res) => { // Missing Async here
  try { // add try / catch
    const task = await Task.find()
    res.status(200).json({msg : "Tasks List" , data : task});
  } catch (error) {
    res.status(400).json({error})
  }
};


//there is no TRY / Catch 
const createTaskWithCheck = async (req, res) => {
  try {
    const { title } = req.body;
    const exist = await Task.findOne({ title });
    if (exist) return res.status(400).json({ msg: "Task already exists" });
  
    const task = await Task.create({ title });
    res.status(201).json({ msg: "Task Created", data: task });
    
  } catch (error) {
    res.status(400).json({error})
    
  }


};

module.exports = {
  createTask,
  getTasks,
  createTaskWithCheck,
};
