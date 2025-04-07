const express = require("express");
const { getSuppliers, createSupplier, updateSupplier, deleteSupplier } = require("../controllers/supplier.controller");
const router = express.Router();

router.get("/", getSuppliers);
router.post("/", createSupplier);
router.put("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);

module.exports = router;
