const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String },
    address: { type: String },
    status: { type: String }
});

module.exports = mongoose.model("Supplier", supplierSchema);
