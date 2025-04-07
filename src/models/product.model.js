const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String },
    type: { type: String },
    size: { type: String },
    supplier: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    importprice: { type: Number },
    status: { type: String }
});

module.exports = mongoose.model("Product", productSchema);
