const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    customername: { type: String },
    customerphone: { type: String },
    purchasedate: { type: String },
    purchasedproduct: { type: String },
    quantity: { type: Number },
    unitprice: { type: Number },
    intomoney: { type: Number }
});

module.exports = mongoose.model("Order", orderSchema);
