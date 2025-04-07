const express = require("express");
const { getProductCategories, createProductCategory, updateProductCategory, deleteProductCategory } = require("../controllers/productCategory.controller");
const router = express.Router();

router.get("/", getProductCategories);
router.post("/", createProductCategory);
router.put("/:id", updateProductCategory);
router.delete("/:id", deleteProductCategory);

module.exports = router;
