const { Router } = require("express");
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const studentSchema = new schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  currentClass: { type: Number, required: true },
  division: {
    type: String,
    required: true,
    uppercase: true,
  },
});

const Student = mongoose.model("Students", studentSchema);

module.exports = Student;
