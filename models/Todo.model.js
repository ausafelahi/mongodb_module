const mongoose = require("mongoose");
const { Schema } = mongoose;

const Todo_Schema = new Schema({
  todoInput: {
    type: String,
    required: true,
  },
});

const Tests = mongoose.model("Tests", Todo_Schema);
module.exports = Tests;
