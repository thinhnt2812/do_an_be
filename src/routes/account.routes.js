const express = require("express");
const { getAccounts, createAccount, updateAccount, deleteAccount, loginAccount } = require("../controllers/account.controller");
const router = express.Router();

router.get("/", getAccounts);
router.post("/", createAccount);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);
router.post("/login", loginAccount);

module.exports = router;
