const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employee.routes");
const productRoutes = require("./routes/product.routes");
const accountRoutes = require("./routes/account.routes");
const importGoodsRoutes = require("./routes/importGood.routes");
const orderRoutes = require("./routes/order.routes");
const productCategorysRoutes = require("./routes/productCategory.routes");
const supplierRoutes = require("./routes/supplier.routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB();

// Định tuyến API
app.use("/employees", employeeRoutes);
app.use("/products", productRoutes);
app.use("/accounts", accountRoutes);
app.use("/import_goods", importGoodsRoutes);
app.use("/orders", orderRoutes);
app.use("/product_categorys", productCategorysRoutes);
app.use("/suppliers", supplierRoutes);

module.exports = app;