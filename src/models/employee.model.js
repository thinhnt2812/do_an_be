const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String },
    gender: { type: String },
    phone: { type: String },
    hometown: { type: String },
    dob: { type: String }, 
    dow: { type: String }, 
    position: { type: String }, 
    status: { type: String}
});

module.exports = mongoose.model("Employee", employeeSchema);
