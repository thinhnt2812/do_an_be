const express = require("express");
const { getEmployees, createEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.controller");
const router = express.Router();

router.get("/", getEmployees);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
