const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    loginname: { type: String },
    password: { type: String },
    phone: { type: String },
    accountowner: { type: String },
    role: { type: String },
    status: { type: String }
});

module.exports = mongoose.model("Account", accountSchema);
