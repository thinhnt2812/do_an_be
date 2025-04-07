const express = require("express");
const { getImportGood, createImportGood, updateImportGood, deleteImportGood } = require("../controllers/importGood.controller");
const router = express.Router();

router.get("/", getImportGood);
router.post("/", createImportGood);
router.put("/:id", updateImportGood);
router.delete("/:id", deleteImportGood);

module.exports = router;
